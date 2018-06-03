type RoundNumbers = { left: number; top: number; right: number; bottom: number }
type OptionalRoundNumbers = {
  left?: number
  top?: number
  right?: number
  bottom?: number
}
type BorderRadius = { rx: number; ry: number }
type ShapeType = 'rect'

export default class Style {
  padding: RoundNumbers | undefined
  border: RoundNumbers | undefined
  radius: BorderRadius | undefined
  shape: ShapeType | undefined

  constructor() {}

  setPadding({
    left = 10,
    top = 10,
    right = 10,
    bottom = 10
  }: OptionalRoundNumbers) {
    this.padding = { left, top, right, bottom }
  }

  setBorderRadius(radius: BorderRadius = { rx: 0, ry: 0 }) {
    this.radius = radius
  }

  setShape(shapeType: ShapeType) {
    this.shape = shapeType
  }

  setBorder({
    left = 0,
    top = 0,
    right = 0,
    bottom = 0
  }: OptionalRoundNumbers) {
    this.border = { left, top, right, bottom }
  }
}
