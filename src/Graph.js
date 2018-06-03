import GraphNode from './graph/Node';
import Layout from './graph/Layout';
import Edge from './graph/Edge';
import debug from 'debug';
import Style from '@/graph/layout/Style';
import Size from '@/graph/layout/Size';
const gdb = debug('graph');
const GRAPH_NODE = '\x00';
export default class Graph {
    constructor(options = {}) {
        this._nodes = {};
        this._edges = {};
        this.size = new Size();
        this.style = new Style();
        this.nodeRankFactor = 0;
        this.compound = false;
        this.multiGraph = false;
        this.directed = true;
        this.rankDir = 'tb';
        this.minX = 0;
        this.minY = 0;
        this.maxX = 0;
        this.maxY = 0;
        this.marginX = 20;
        this.marginY = 20;
        this.randomId = 1;
        this.dummyChain = [];
        this.rankSep = 50;
        this.edgeSep = 20;
        this.nodeSep = 50;
        this.ranker = 'network-simplex';
        Object.assign(this, options);
        this.rankDir = this.rankDir.toLowerCase();
    }
    setNode(id, options = {}) {
        if (this._nodes[id]) {
            if (options) {
                this._nodes[id].setOptions(options);
            }
            return this._nodes[id];
        }
        gdb('creating node', id, options);
        this._nodes[id] = new GraphNode(id, options);
        return this._nodes[id];
    }
    removeNode(id) {
        gdb('removing node id', id);
        const node = this._nodes[id];
        if (!node) {
            return;
        }
        Object.keys(node.inEdges).forEach(this.removeEdge, this);
        Object.keys(node.outEdges[id]).forEach(this.removeEdge, this);
        delete this._nodes[id];
    }
    setEdge(fromId, toId, options = {}) {
        gdb('setting edge', fromId, toId, options);
        const edgeId = Edge.generateId(fromId, toId, this.directed, options.name);
        if (this._edges[edgeId]) {
            if (options) {
                this._edges[edgeId].setOptions(options);
            }
            return this;
        }
        const fromNode = this.setNode(fromId);
        const toNode = this.setNode(toId);
        const edge = new Edge(edgeId, fromNode, toNode, options);
        this._edges[edgeId] = edge;
        fromNode.outEdges[edgeId] = edge;
        toNode.inEdges[edgeId] = edge;
        return this;
    }
    removeEdge(id) {
        gdb('removing edge', id);
        if (!this._edges[id]) {
            gdb('edge', id, 'does not exist. returning...');
            return;
        }
        const edge = this._edges[id];
        delete this._edges[id];
    }
    addDummyNode(type, attrs, name) {
        name = name + this.randomId++;
        attrs.dummy = type;
        return this.setNode(name, attrs);
    }
    getNode(id) {
        return this._nodes[id];
    }
    getEdge(fromId, toId) {
        return this._edges[Edge.generateId(fromId, toId, this.directed)];
    }
    getChildren(id) {
        if (!id) {
            return this.nodes;
        }
        if (this.compound) {
            return Object.values(this._nodes[id].children);
        }
        else {
            return [];
        }
    }
    getParent(id) {
        if (!this.compound) {
            return null;
        }
        const parent = this._nodes[id].parent;
        if (parent !== null && parent.id !== GRAPH_NODE) {
            return parent;
        }
        return null;
    }
    getPredecessors(node) {
        return node.predecessors ? Object.keys(node.predecessors) : [];
    }
    getSuccessors(node) {
        return node.successors ? Object.keys(node.successors) : [];
    }
    setParent(id, parentId) {
        if (!this.compound) {
            throw new Error('Cannot set parent in a non-compound graph');
        }
        if (parentId === '') {
            throw new Error('Cannot set parent id to an empty id! (parentId is an empty string)');
        }
        let ancestor = parentId;
        while (ancestor) {
            const parent = this.getParent(ancestor);
            if (!parent) {
                ancestor = null;
                continue;
            }
            if (ancestor === id) {
                throw new Error('Setting ' +
                    parentId +
                    ' as parent of ' +
                    id +
                    ' would create a cycle');
            }
            ancestor = parent.id;
        }
        let parentNode = this.setNode(parentId);
        let childNode = this.setNode(id);
        this._nodes[id].parent = parentNode;
        parentNode.children[id] = childNode;
    }
    nodeEdges(from, to) {
        const inEdges = this.inEdges(from, to);
        if (inEdges) {
            return inEdges.concat(this.outEdges(from, to));
        }
        return [];
    }
    isSubgraph(id) {
        return this.getChildren(id).length !== 0;
    }
    doLayout() {
        gdb('layouting graph');
        this.layout = new Layout(this);
    }
    hasNode(id) {
        return this._nodes[id];
    }
    get nodes() {
        return Object.values(this._nodes);
    }
    get edges() {
        return Object.values(this._edges);
    }
    get sources() {
        return this.nodes.filter(node => {
            return Object.keys(node.inEdges).length === 0;
        });
    }
    inEdges(from, to) {
        if (!from.inEdges) {
            return [];
        }
        const edges = Object.values(from.inEdges);
        if (!to) {
            return edges;
        }
        return edges.filter(edge => edge.from.id === to.id);
    }
    outEdges(from, to) {
        if (!from.outEdges) {
            return [];
        }
        const edges = Object.values(from.outEdges);
        if (!to) {
            return edges;
        }
        return edges.filter(edge => edge.to.id === to.id);
    }
    get nodeIds() {
        return Object.keys(this._nodes);
    }
    static buildBlockGraph(layering, root, reverseSep) {
        const blockGraph = new Graph();
        layering.forEach(layer => {
            let to;
            layer.forEach(node => {
                blockGraph.setNode(root[node.id].id);
                if (!to) {
                    to = node;
                    return;
                }
                const prevMax = blockGraph.getEdge(root[to.id].id, root[node.id].id);
                gdb('CHECK PREVMAX FROM STABLE');
                blockGraph.setEdge(root[to.id].id, root[node.id].id, {
                    maxSep: Math.max(blockGraph.sep(reverseSep, node, to), 0)
                });
                to = node;
            });
        });
        return blockGraph;
    }
    sep(reverseSep, from, to) {
        let sum = 0;
        let delta;
        sum += from.size.width / 2;
        gdb('CHECK LABEL POS');
        if (delta) {
            sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        sum += (from.dummy ? this.edgeSep : this.nodeSep) / 2;
        sum += (to.dummy ? this.edgeSep : this.nodeSep) / 2;
        sum += to.size.width / 2;
        if (delta) {
            sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        return sum;
    }
}
//# sourceMappingURL=Graph.js.map