import Graph from './Graph';
import Renderer from './Renderer';
import FlowElement from './FlowElement';
import GraphSvg from './graph/Svg';
export default class FlowChart {
    constructor(options = {}) {
        this.elements = [];
        localStorage.debug = 'layout,normalizer,layering';
    }
    addElement(id, options) {
        const el = new FlowElement(id, options);
        this.elements.push(el);
        return el;
    }
    render(element) {
        const svg = new GraphSvg('svg');
        svg.node.id = 'f' + element.id;
        element.appendChild(svg.node);
        const group = svg.append('g');
        const graph = new Graph({
            multiGraph: true,
            compound: true,
            rankDir: 'LR',
            marginX: 20,
            marginY: 20
        });
        for (const i in this.elements) {
            const el = this.elements[i];
            graph.setNode(el.id, el.options);
        }
        for (const node of graph.nodes) {
            node.style.radius = { rx: 5, ry: 5 };
        }
        for (const i in this.elements) {
            const el = this.elements[i];
            for (const k in el.edges) {
                const edge = el.edges[k];
                graph.setEdge(el.id, edge.otherId, edge.options);
            }
        }
        const renderer = new Renderer(graph);
        renderer.render(group);
    }
}
//# sourceMappingURL=FlowChart.js.map