import GraphSvg from '../graph/Svg'

interface ShapeOptions {
  width?: number
  height?: number
  rx?: string
  ry?: string
}

export default class Shape {
  public shape: GraphSvg

  constructor(shapeType: 'rect', bbox: SVGRect, options: ShapeOptions) {
    this.shape = this[shapeType](bbox, options)
  }

  public rect(bbox: SVGRect, {rx= '0', ry= '0'}: {rx?: string, ry?: string}) {
    return new GraphSvg('rect')
      .attr('rx', rx)
      .attr('ry', ry)
      .attr('x', (-bbox.width / 2).toString())
      .attr('y', (-bbox.height / 2).toString())
      .attr('width', bbox.width.toString())
      .attr('height', bbox.height.toString())
  }
}
