import Position from "./layout/Position";
import Size from "./layout/Size";
import GraphNode from "./Node";

const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

export interface EdgeOptions {
  name?: string
  minLen?: number
  weight?: number
  size?: Size
  label?: string
  labelOffset?: number
  labelPos?: string,
  nestingEdge?: boolean,
  maxSep?: number
}

export default class Edge {
  id: string
  label: string | undefined
  from: GraphNode
  to: GraphNode
  order: number = 0
  points: Array<any> = []
  data: {} = {}
  position: Position = new Position()
  size: Size = new Size()

  minLen: number = 1
  weight: number = 1
  labelOffset: number = 10
  labelPos: string = 'r'
  nestingEdge: boolean = false

  maxSep: number | undefined

  constructor(id: string, from: GraphNode, to: GraphNode, options: EdgeOptions) {
    this.id = id
    this.from = from
    this.to = to
    this.setOptions(options)
  }

  static generateId(fromId: string, toId: string, directed: boolean = false, name?: string) : string {
    if (!directed && fromId > toId) {
      const tmp = fromId
      fromId = toId
      toId = tmp
    }
    return fromId + EDGE_KEY_DELIM + toId + EDGE_KEY_DELIM + (name ? name : DEFAULT_EDGE_NAME)
  }

  setOptions(options: EdgeOptions = {}) {
    Object.assign(this, options)
  }
}