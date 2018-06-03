import GraphNode, { NodeOptions } from './graph/Node'
import Layout from './graph/Layout'
import Edge, { EdgeOptions } from './graph/Edge'
import debug from 'debug'
import { Matrix } from '@/graph/layout/Layering';
import Style from '@/graph/layout/Style';
import Size from '@/graph/layout/Size';

const gdb = debug('graph')
const GRAPH_NODE = '\x00'

export interface EdgeList {
  [edgeId: string]: Edge
}

export type EdgeArray = Array<Edge>
export type EdgeKeys = string[]

export interface GraphNodeList {
  [nodeId: string]: GraphNode
}

export type GraphNodeArray = Array<GraphNode>

interface GraphOptions {
    directed?: boolean,
    multiGraph?: boolean,
    compound?: boolean
    rankDir?: string
    rankSep?: number
    edgeSep?: number
    nodeSep?: number
    marginX?: number
    marginY?: number
}

export default class Graph {
  private _nodes: GraphNodeList = {}
  private _edges: EdgeList = {}

  layout: Layout | undefined
  size: Size = new Size()
  style: Style = new Style()
  rootNode: GraphNode | undefined
  nodeRankFactor: number = 0
  compound: boolean = false
  multiGraph: boolean = false
  directed: boolean = true

  rankDir: string = 'tb'
  minX: number = 0
  minY: number = 0
  maxX: number = 0
  maxY: number = 0
  marginX: number = 20
  marginY: number = 20
  randomId: number = 1

  dummyChain: GraphNodeArray = []

  rankSep: number = 50
  edgeSep: number = 20
  nodeSep: number = 50

  maxRank: number | undefined

  ranker: 'network-simplex' | 'tight-tree' | 'longest-path' = 'network-simplex'

  constructor(options: GraphOptions = {}) {

    Object.assign(this, options)
    this.rankDir = this.rankDir.toLowerCase()

    // v -> edgeObj
    // this.in = {}

    // u -> v -> Number
    // this.preds = {}

    // v -> edgeObj
    // this.out = {}

    // v -> w -> Number
    // this.sucs = {}
  }

  setNode(id: string, options: NodeOptions = {}): GraphNode {
    if (this._nodes[id]) {
      if (options) {
        this._nodes[id].setOptions(options)
      }
      return this._nodes[id]
    }

    gdb('creating node', id, options)

    this._nodes[id] = new GraphNode(id, options)
    return this._nodes[id]
  }

  removeNode(id: string) {
    gdb('removing node id', id)
    const node = this._nodes[id]
    if (!node) {
      return
    }

    Object.keys(node.inEdges).forEach(this.removeEdge, this)
    Object.keys(node.outEdges[id]).forEach(this.removeEdge, this)

    delete this._nodes[id]
  }

  setEdge(fromId: string, toId: string, options: EdgeOptions = {}) {
    gdb('setting edge', fromId, toId, options)

    const edgeId = Edge.generateId(fromId, toId, this.directed, options.name)

    if (this._edges[edgeId]) {
      if (options) {
        this._edges[edgeId].setOptions(options)
      }
      return this
    }

    // first ensure the nodes exist
    const fromNode = this.setNode(fromId)
    const toNode = this.setNode(toId)

    const edge = new Edge(edgeId, fromNode, toNode, options)

    this._edges[edgeId] = edge

    fromNode.outEdges[edgeId] = edge
    toNode.inEdges[edgeId] = edge
    return this
  }

  removeEdge(id: string) {
    gdb('removing edge', id)
    if (!this._edges[id]) {
      gdb('edge', id, 'does not exist. returning...')
      return
    }

    const edge = this._edges[id]
    delete this._edges[id]
  }

  addDummyNode(type: string, attrs: NodeOptions, name: string) {
    name = name + this.randomId++
    attrs.dummy = type
    return this.setNode(name, attrs)
  }

  getNode(id: string) {
    return this._nodes[id]
  }

  getEdge(fromId: string, toId: string) {
    return this._edges[Edge.generateId(fromId, toId, this.directed)]
  }

  getChildren(id?: string): GraphNodeArray {
    if (!id) {
      return this.nodes
    }

    if (this.compound) {
      return Object.values(this._nodes[id].children)
    } else {
      return []
    }
  }

  getParent(id: string) {
    if (!this.compound) {
      return null
    }

    const parent = this._nodes[id].parent
    if (parent !== null && parent.id !== GRAPH_NODE) {
      return parent
    }

    return null
  }

  getPredecessors(node: GraphNode): Array<string> {
    return node.predecessors ? Object.keys(node.predecessors) : []
  }

  getSuccessors(node: GraphNode): Array<string> {
    return node.successors ? Object.keys(node.successors) : []
  }

  setParent(id: string, parentId: string) {
    if (!this.compound) {
      throw new Error('Cannot set parent in a non-compound graph')
    }

    if (parentId === '') {
      throw new Error('Cannot set parent id to an empty id! (parentId is an empty string)')
    }

    let ancestor: string | null = parentId

    while (ancestor) {
      const parent = this.getParent(ancestor)

      if (!parent) {
        ancestor = null
        continue;
      }

      if (ancestor === id) {
        throw new Error(
          'Setting ' +
            parentId +
            ' as parent of ' +
            id +
            ' would create a cycle'
        )
      }

      ancestor = parent.id
    }

    let parentNode = this.setNode(parentId)
    let childNode = this.setNode(id)
    // delete parentNode.children[id]
    this._nodes[id].parent = parentNode
    parentNode.children[id] = childNode
  }

  nodeEdges(from: GraphNode, to?: GraphNode) {
    const inEdges =  this.inEdges(from, to)
    if (inEdges) {
      return inEdges.concat(this.outEdges(from, to))
    }
    return []
  }

  isSubgraph(id: string) {
    return this.getChildren(id).length !== 0
  }

  doLayout() {
    gdb('layouting graph')
    this.layout = new Layout(this)
  }

  hasNode(id: string) {
    return this._nodes[id]
  }

  get nodes(): GraphNodeArray {
    return Object.values(this._nodes)
  }

  get edges(): EdgeArray {
    return Object.values(this._edges)
  }

  get sources(): GraphNodeArray {
    return this.nodes.filter(node => {
      return Object.keys(node.inEdges).length === 0
    })
  }

  inEdges(from: GraphNode, to?: GraphNode) {
    // gdb('ins', this.in)
    // gdb('in from', from, 'to', to, inFrom)
    if (!from.inEdges) {
      return []
    }

    const edges = Object.values(from.inEdges)
    if (!to) {
      return edges
    }
    return edges.filter(edge => edge.from.id === to.id)
  }

  outEdges(from: GraphNode, to?: GraphNode) {
    // gdb('out from', from, 'to', to, outFrom)
    if (!from.outEdges) {
      return []
    }

    const edges = Object.values(from.outEdges)
    if (!to) {
      return edges
    }
    return edges.filter(edge => edge.to.id === to.id)
  }

  get nodeIds(): Array<string> {
    return Object.keys(this._nodes)
  }

  static buildBlockGraph(layering: Matrix, root: GraphNodeList, reverseSep: boolean) {
    const blockGraph = new Graph()

    layering.forEach(layer => {
      let to: GraphNode | null
      layer.forEach(node => {
        blockGraph.setNode(root[node.id].id)
        if (!to) {
          to = node
          return
        }

        const prevMax = blockGraph.getEdge(root[to.id].id, root[node.id].id)
        gdb('CHECK PREVMAX FROM STABLE')
        blockGraph.setEdge(root[to.id].id, root[node.id].id, {
          maxSep: Math.max(blockGraph.sep(reverseSep, node, to), /*prevMax || */0)
        })
        to = node
      })
    })

    return blockGraph
  }

  sep(reverseSep: boolean, from: GraphNode, to: GraphNode) {
    let sum = 0
    let delta

    sum += from.size.width / 2
    gdb('CHECK LABEL POS')
    // if (from.labelPos) {
    //   switch (from.labelPos.toLowerCase()) {
    //     case 'l':
    //       delta = -from.size.width / 2
    //       break
    //     case 'r':
    //       delta = from.size.width / 2
    //       break
    //   }
    // }

    if (delta) {
      sum += reverseSep ? delta : -delta
    }
    delta = 0

    sum += (from.dummy ? this.edgeSep : this.nodeSep) / 2
    sum += (to.dummy ? this.edgeSep : this.nodeSep) / 2

    sum += to.size.width / 2

    // if (to.labelPos) {
    //   switch (to.labelPos.toLowerCase()) {
    //     case 'l':
    //       delta = to.size.width / 2
    //       break
    //     case 'r':
    //       delta = -to.size.width / 2
    //       break
    //   }
    // }

    if (delta) {
      sum += reverseSep ? delta : -delta
    }
    delta = 0

    return sum
  }
}
