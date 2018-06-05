import Position from './layout/Position'
import Size from './layout/Size'
import GraphNode from './Node'

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
  public static generateId(fromId: string, toId: string, directed: boolean = false, name?: string): string {
    if (!directed && fromId > toId) {
      const tmp = fromId
      fromId = toId
      toId = tmp
    }
    return fromId + EDGE_KEY_DELIM + toId + EDGE_KEY_DELIM + (name ? name : DEFAULT_EDGE_NAME)
  }

  public id: string
  public label: string | undefined
  public from: GraphNode
  public to: GraphNode
  public order: number = 0
  public points: any[] = []
  public data: {} = {}
  public position: Position = new Position()
  public size: Size = new Size()

  public minLen: number = 1
  public weight: number = 1
  public labelOffset: number = 10
  public labelPos: string = 'r'
  public nestingEdge: boolean = false

  public maxSep: number | undefined

  constructor(id: string, from: GraphNode, to: GraphNode, options: EdgeOptions) {
    this.id = id
    this.from = from
    this.to = to
    this.setOptions(options)
  }

  public setOptions(options: EdgeOptions = {}) {
    Object.assign(this, options)
  }
}
