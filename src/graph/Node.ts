import Size from './layout/Size'
import Position from './layout/Position'
import Style from './layout/Style'
import Edge from './Edge'
import { EdgeList, GraphNodeList } from '@/Graph'
import GraphSvg from '@/graph/Svg'

export interface NodeOptions {
  position?: Position
  size?: Size
  style?: Style
  label?: string
  dummy?: string,
  rank?: number,

  borders?: {top?: GraphNode, bottom?: GraphNode, left?: GraphNodeList, right?: GraphNodeList}
}

export default class GraphNode {
  public id: string
  public label: string = ''
  public parent: GraphNode | null = null
  public children: GraphNodeList = {}
  public position: Position = new Position()
  public size: Size = new Size()
  public style: Style = new Style()
  public rank: number = 0
  public order: number = 0
  public dummy: string | undefined

  public inEdges: EdgeList = {}
  public outEdges: EdgeList = {}

  public successors: {[nodeId: string]: number} = {}
  public predecessors: {[nodeId: string]: number} = {}

  public minRank: number | undefined
  public maxRank: number | undefined

  public borders: {top?: GraphNode, bottom?: GraphNode, left?: GraphNodeList, right?: GraphNodeList} = {}

  public svgGroup: GraphSvg | undefined

  constructor(id: string, options: NodeOptions = {}) {
    this.id = id
    this.setOptions(options)
  }

  public setOptions(options: NodeOptions) {
    if (!options.label) {
      options.label = this.id
    }

    Object.assign(this, options)
  }
}
