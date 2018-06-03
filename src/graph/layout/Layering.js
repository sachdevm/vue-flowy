import Graph from '../../Graph';
import debug from 'debug';
const log = debug('layering');
export default class Layering {
    constructor(graph) {
        this.graph = graph;
        log('creating matrix once');
        this.matrix = this.buildLayerMatrix();
    }
    buildLayerMatrix() {
        const layering = [];
        log('NODES FOR MATRIX is', Object.assign({}, this.graph.nodes));
        this.graph.nodes.forEach(node => {
            if (!layering[node.rank]) {
                layering[node.rank] = [];
            }
            layering[node.rank][node.order] = node;
        });
        return layering;
    }
    calculatePositions() {
        this._calculateYPositions();
        this._calculateXPositions();
    }
    _calculateYPositions() {
        let prevY = 0;
        this.matrix.forEach(layer => {
            const maxHeight = Math.max(...layer.map(node => {
                return node.size.height;
            }));
            layer.forEach(node => {
                log('assigning y', node.id, prevY, maxHeight / 2, prevY + maxHeight / 2);
                node.position.y = prevY + maxHeight / 2;
            });
            prevY += maxHeight + this.graph.rankSep;
        });
    }
    _calculateXPositions() {
        if (!this.graph.layout) {
            throw new Error('Layout is not set yet!');
        }
        log('is', this.buildLayerMatrix());
        const xPositions = {};
        let adjustedLayering;
        const verticals = ['u', 'd'];
        const horizontals = ['l', 'r'];
        verticals.forEach(vert => {
            adjustedLayering =
                vert === 'u' ? this.matrix : Object.values(this.matrix).reverse();
            horizontals.forEach(horiz => {
                if (horiz === 'r') {
                    adjustedLayering = adjustedLayering.map(inner => Object.values(inner).reverse());
                }
                log('adjusted layering is', adjustedLayering);
                const align = this._verticalAlignment(adjustedLayering, vert, horiz);
                let xs = this._horizontalCompaction(adjustedLayering, align, horiz === 'r');
                log(vert + horiz, xs);
                if (horiz === 'r') {
                    for (const key in xs) {
                        xs[key] = -xs[key];
                    }
                }
                xPositions[vert + horiz] = xs;
            });
        });
        log('xPositions finish', xPositions);
        const smallestWidthAlignment = this._findSmallestWidthAlignment(xPositions);
        log('smallestWidth is', smallestWidthAlignment);
        this._alignCoordinates(xPositions, smallestWidthAlignment);
        return this.graph.layout.balance(xPositions);
    }
    _alignCoordinates(xPositions, smallestWidthAlignment) {
        const alignToVals = Object.values(smallestWidthAlignment);
        const alignToMin = Math.min(...alignToVals);
        const alignToMax = Math.max(...alignToVals);
        const verticals = ['u', 'd'];
        const horizontals = ['l', 'r'];
        verticals.forEach(vert => {
            horizontals.forEach(horiz => {
                const alignment = vert + horiz;
                const xs = xPositions[alignment];
                if (xs === smallestWidthAlignment) {
                    return;
                }
                const xsVals = Object.values(xs);
                const delta = horiz === 'l'
                    ? alignToMin - Math.min(...xsVals)
                    : alignToMax - Math.max(...xsVals);
                if (delta) {
                    for (const i in xs) {
                        xs[i] += delta;
                    }
                    xPositions[alignment] = xs;
                }
            });
        });
    }
    _findSmallestWidthAlignment(xPositions) {
        let minWidth = Infinity;
        let minXs = {};
        Object.values(xPositions).forEach(xs => {
            let minVal = Infinity;
            let maxVal = -Infinity;
            Object.keys(xs).forEach(nodeId => {
                const no = xs[nodeId];
                const check = no - this.graph.getNode(nodeId).size.width / 2;
                if (check < minVal) {
                    minVal = check;
                }
                if (check > maxVal) {
                    maxVal = check;
                }
            });
            const minCheck = maxVal - minVal;
            if (minCheck < minWidth) {
                minWidth = minCheck;
                minXs = xs;
            }
        });
        return minXs;
    }
    _horizontalCompaction(layering, align, reverseSep) {
        log('horizontalCompaction', layering, align, reverseSep);
        const xs = {};
        const blockGraph = Graph.buildBlockGraph(layering, align.root, reverseSep);
        const visited = {};
        function pass1(node) {
            if (visited[node.id]) {
                return;
            }
            visited[node.id] = true;
            xs[node.id] = blockGraph.inEdges(node).reduce((max, edge) => {
                pass1(edge.from);
                return Math.max(max, xs[edge.from.id] + (edge.maxSep || 0));
            }, 0);
        }
        blockGraph.nodes.forEach(pass1);
        Object.keys(align.align).forEach(nodeId => {
            xs[nodeId] = xs[align.root[nodeId].id];
        });
        return xs;
    }
    _verticalAlignment(layering, vert, horiz) {
        const root = {};
        const align = {};
        const pos = {};
        layering.forEach(layer => {
            layer.forEach((node, order) => {
                root[node.id] = node;
                align[node.id] = node;
                pos[node.id] = order;
            });
        });
        log('objects after first step is', root, align, pos);
        layering.forEach(layer => {
            let prevIdx = -1;
            layer.forEach(node => {
                let ws = vert === 'u'
                    ? this.graph.getPredecessors(node)
                    : this.graph.getSuccessors(node);
                if (!ws.length) {
                    return;
                }
                if (!this.graph.layout) {
                    throw new Error('Layout for graph is not set!');
                }
                ws = this.graph.layout.sortByFunction(ws, w => pos[w]);
                const mp = (ws.length - 1) / 2;
                for (let i = Math.floor(mp), il = Math.ceil(mp); i <= il; i++) {
                    const w = ws[i];
                    if (align[node.id].id === node.id && prevIdx < pos[w]) {
                        align[w] = node;
                        align[node.id] = root[node.id] = root[w];
                        prevIdx = pos[w];
                    }
                }
            });
        });
        return { root, align };
    }
}
//# sourceMappingURL=Layering.js.map