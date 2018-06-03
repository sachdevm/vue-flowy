import Size from './layout/Size';
import Position from './layout/Position';
import Style from './layout/Style';
export default class GraphNode {
    constructor(id, options = {}) {
        this.label = '';
        this.parent = null;
        this.children = {};
        this.position = new Position();
        this.size = new Size();
        this.style = new Style();
        this.rank = 0;
        this.order = 0;
        this.inEdges = {};
        this.outEdges = {};
        this.successors = {};
        this.predecessors = {};
        this.borders = {};
        this.id = id;
        this.setOptions(options);
    }
    setOptions(options) {
        if (!options.label) {
            options.label = this.id;
        }
        Object.assign(this, options);
    }
}
//# sourceMappingURL=Node.js.map