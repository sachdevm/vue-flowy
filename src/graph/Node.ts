import Size from './layout/Size'
import Position from './layout/Position'
import Style from './layout/Style'
import Edge from './Edge';
import { EdgeList, GraphNodeList } from '@/Graph';
import GraphSvg from '@/graph/Svg';

export interface NodeOptions {
  position?: Position
  size?: Size
  label?: string
  dummy?: string,
  rank?: number,

  borders?: {top?: GraphNode, bottom?: GraphNode, left?: GraphNodeList, right?: GraphNodeList}
}

export default class GraphNode {
  id: string
  label: string = ''
  parent: GraphNode | null = null
  children: GraphNodeList = {}
  position: Position = new Position()
  size: Size = new Size()
  style: Style = new Style()
  rank: number = 0
  order: number = 0
  dummy: string | undefined
  
  inEdges: EdgeList = {}
  outEdges: EdgeList = {}

  successors: {[nodeId: string]: number} = {}
  predecessors: {[nodeId: string]: number} = {}

  minRank: number | undefined
  maxRank: number | undefined

  borders: {top?: GraphNode, bottom?: GraphNode, left?: GraphNodeList, right?: GraphNodeList} = {}

  svgGroup: GraphSvg | undefined

  constructor(id: string, options : NodeOptions = {}) {
    this.id = id
    this.setOptions(options)
  }

  setOptions(options: NodeOptions) {
    if (!options.label) {
      options.label = this.id
    }

    Object.assign(this, options)
  }
}
