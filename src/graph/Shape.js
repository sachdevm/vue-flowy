import GraphSvg from '../graph/Svg';
export default class Shape {
    constructor(shapeType, bbox, options) {
        this.shape = this[shapeType](bbox, options);
    }
    rect(bbox, { rx = '0', ry = '0' }) {
        return new GraphSvg('rect')
            .attr('rx', rx)
            .attr('ry', ry)
            .attr('x', (-bbox.width / 2).toString())
            .attr('y', (-bbox.height / 2).toString())
            .attr('width', bbox.width.toString())
            .attr('height', bbox.height.toString());
    }
}
//# sourceMappingURL=Shape.js.map