const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

const defaults = {}

export default class Edge {
  constructor(id, from, to, options) {
    this.id = id
    this.from = from
    this.to = to
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
    Object.assign(this, defaults, options)
  }
}