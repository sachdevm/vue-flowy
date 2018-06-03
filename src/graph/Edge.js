import Position from "./layout/Position";
import Size from "./layout/Size";
const DEFAULT_EDGE_NAME = '\x00';
const EDGE_KEY_DELIM = '\x01';
export default class Edge {
    constructor(id, from, to, options) {
        this.order = 0;
        this.points = [];
        this.data = {};
        this.position = new Position();
        this.size = new Size();
        this.minLen = 1;
        this.weight = 1;
        this.labelOffset = 10;
        this.labelPos = 'r';
        this.nestingEdge = false;
        this.id = id;
        this.from = from;
        this.to = to;
        this.setOptions(options);
    }
    static generateId(fromId, toId, directed = false, name) {
        if (!directed && fromId > toId) {
            const tmp = fromId;
            fromId = toId;
            toId = tmp;
        }
        return fromId + EDGE_KEY_DELIM + toId + EDGE_KEY_DELIM + (name ? name : DEFAULT_EDGE_NAME);
    }
    setOptions(options = {}) {
        Object.assign(this, options);
    }
}
//# sourceMappingURL=Edge.js.map