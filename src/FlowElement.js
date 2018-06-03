export default class FlowElement {
    constructor(id, options) {
        this.edges = [];
        this.id = id;
        this.options = options;
    }
    leadsTo(destinationElement, options) {
        this.edges.push({ otherId: destinationElement.id, options });
        return destinationElement;
    }
}
//# sourceMappingURL=FlowElement.js.map