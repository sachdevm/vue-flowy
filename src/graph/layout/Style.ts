interface RoundNumbers { left: number; top: number; right: number; bottom: number }
interface OptionalRoundNumbers {
  left?: number,
  top?: number,
  right?: number,
  bottom?: number
}
interface BorderRadius { rx: number; ry: number }
type ShapeType = 'rect'

export default class Style {
  public padding: RoundNumbers | undefined
  public border: RoundNumbers | undefined
  public radius: BorderRadius | undefined
  public shape: ShapeType = 'rect'

  public setPadding({
    left = 10,
    top = 10,
    right = 10,
    bottom = 10,
  }: OptionalRoundNumbers) {
    this.padding = { left, top, right, bottom }
  }

  public setBorderRadius(radius: BorderRadius = { rx: 0, ry: 0 }) {
    this.radius = radius
  }

  public setShape(shapeType: ShapeType) {
    this.shape = shapeType
  }

  public setBorder({
    left = 0,
    top = 0,
    right = 0,
    bottom = 0,
  }: OptionalRoundNumbers) {
    this.border = { left, top, right, bottom }
  }
}
