import GraphSvg from "../graph/Svg";

export default class Shape {

  /**
   * 
   * @param {string} shapeType 
   * @param {Object} bbox 
   * @param {Object} options 
   */
  constructor(shapeType, bbox, options) {
    /** @type {GraphSvg} */
    this.shape = this[shapeType](bbox, options)
    console.log('inside bbox', this.shape.node.getBBox())
  }
  /**
   * 
   * @param {Object} bbox 
   * @param {Object} options 
   */
  rect(bbox, options) {
    console.log('bbox', bbox)
    return new GraphSvg('rect')
      .attr('rx', options.rx)
      .attr('ry', options.ry)
      .attr('x', -bbox.width / 2)
      .attr('y', -bbox.height / 2)
      .attr('width', bbox.width)
      .attr('height', bbox.height)
      .attr('rx', options.rx)
  }
}