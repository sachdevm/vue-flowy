import Shape from './graph/Shape';
import GraphLabel from './graph/Label';
export default class Renderer {
    constructor(graph) {
        this.graph = graph;
    }
    render(svg) {
        console.log('rendering', svg, this.graph);
        const edgePathsGroup = this.createOrSelectGroup(svg, 'edgePaths');
        const edgeLabels = this.createEdgeLabels(this.createOrSelectGroup(svg, 'edgeLabels'));
        this.createNodes(this.createOrSelectGroup(svg, 'nodes'));
        this.graph.doLayout();
        let minX = 1000;
        let minY = 1000;
        let maxX = -1000;
        let maxY = -1000;
        this.graph.nodes.forEach(node => {
            minX = Math.min(minX, node.position.x - node.size.width / 2);
            minY = Math.min(minY, node.position.y - node.size.height / 2);
            maxX = Math.max(maxX, node.position.x + node.size.width / 2);
            maxY = Math.max(maxY, node.position.y + node.size.height / 2);
        });
        this.graph.edges.forEach(edge => {
            if (edge.position.x && edge.position.y) {
                minX = Math.min(minX, edge.position.x - edge.size.width / 2);
                minY = Math.min(minY, edge.position.y - edge.size.height / 2);
                maxX = Math.max(maxX, edge.position.x + edge.size.width / 2);
                maxY = Math.max(maxY, edge.position.y + edge.size.height / 2);
            }
            const points = edge.points.slice(1, edge.points.length - 1);
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                minX = Math.min(minX, point.x);
                minY = Math.min(minY, point.y);
                maxX = Math.max(maxX, point.x);
                maxY = Math.max(maxY, point.y);
            }
        });
        this.graph.minX = minX;
        this.graph.minY = minY;
        this.graph.maxX = maxX;
        this.graph.maxY = maxY;
        console.log('GRAPH', this.graph);
        this.positionNodes();
    }
    createNodes(selection) {
        const simpleNodes = this.graph.nodeIds.filter(id => {
            return !this.graph.isSubgraph(id);
        });
        this.graph.nodes.forEach(graphNode => {
            const nodeGroup = selection.append('g').addClass('node');
            const labelGroup = nodeGroup.append('g').addClass('label');
            const label = labelGroup.append(new GraphLabel({ label: graphNode.label }).group);
            const labelBBox = label.node.getBBox();
            if (graphNode.style.padding) {
                labelBBox.width +=
                    graphNode.style.padding.left + graphNode.style.padding.right;
                labelBBox.height +=
                    graphNode.style.padding.top + graphNode.style.padding.bottom;
                labelGroup.attr('transform', 'translate(' +
                    (graphNode.style.padding.left - graphNode.style.padding.right) / 2 +
                    ',' +
                    (graphNode.style.padding.top - graphNode.style.padding.bottom) / 2 +
                    ')');
            }
            if (!graphNode.style.shape) {
                throw new Error('no shape is defined!');
            }
            const shape = nodeGroup.append(new Shape(graphNode.style.shape, labelBBox, { width: graphNode.size.width, height: graphNode.size.height }).shape);
            const shapeBBox = shape.node.getBBox();
            graphNode.size.setSize(shapeBBox.width, shapeBBox.height);
            nodeGroup.append(labelGroup);
            graphNode.svgGroup = nodeGroup;
        });
    }
    createEdgeLabels(selection) {
        let svgEdgeLabels = selection.selectAll('g.edgeLabel');
        this.graph.edges.forEach(edge => {
            const edgeLabelGroup = selection.append('g').addClass('edgeLabel');
            const labelGroup = edgeLabelGroup.append('g').addClass('label');
            const label = labelGroup.append(new GraphLabel({ label: edge.label || '' }).group);
            const labelBBox = label.node.getBBox();
            edge.size.width = edge.size.width || labelBBox.width;
            edge.size.height = edge.size.height || labelBBox.height;
        });
    }
    positionNodes() {
        console.log('position nodes', this.graph.nodes, 'with edges', this.graph.edges);
        this.graph.nodes.forEach(node => {
            if (!node.svgGroup) {
                return;
            }
            node.svgGroup.attr('transform', 'translate(' +
                (node.position.x || 0) +
                ',' +
                (node.position.y || 0) +
                ')');
        });
    }
    createOrSelectGroup(root, name) {
        return root.select('g.' + name) || root.append('g').addClass(name);
    }
}
//# sourceMappingURL=Renderer.js.map