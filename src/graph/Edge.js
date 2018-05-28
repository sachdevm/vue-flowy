import Position from "./layout/Position";
import Size from "./layout/Size";

const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

const defaults = {
  minLen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labelOffset: 10,
  labelPos: 'r'
}

export default class Edge {
  constructor(id, from, to, options) {
    this.id = id
    this.from = from
    this.to = to
    this.order = 0
    this.points = []
    this.data = {}
    this.position = new Position()
    this.size = new Size()
    Object.assign(this, defaults)
    this.setOptions(options)
  }

  static generateId(from, to, directed = false) {
    if (!directed && from > to) {
      const tmp = from
      from = to
      to = tmp
    }
    return from + EDGE_KEY_DELIM + to + EDGE_KEY_DELIM + DEFAULT_EDGE_NAME
  }

  setOptions(options) {
    Object.assign(this, options)
  }
}