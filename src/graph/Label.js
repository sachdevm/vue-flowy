import GraphSvg from './Svg';
export default class GraphLabel {
    constructor(options) {
        this.group = new GraphSvg('g');
        this.labelData = options;
        this.textLabel();
    }
    textLabel() {
        const text = this.group.append('text').text(this.labelData.label);
    }
}
//# sourceMappingURL=Label.js.map