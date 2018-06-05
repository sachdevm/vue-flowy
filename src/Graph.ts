import GraphNode, { NodeOptions } from './graph/Node'
import Layout from './graph/Layout'
import Edge, { EdgeOptions } from './graph/Edge'
import debug from 'debug'
import { Matrix } from '@/graph/layout/Layering'
import Style from '@/graph/layout/Style'
import Size from '@/graph/layout/Size'

const gdb = debug('graph')
const GRAPH_NODE = '\x00'

export interface EdgeList {
  [edgeId: string]: Edge
}

export type EdgeArray = Edge[]
export type EdgeKeys = string[]

export interface GraphNodeList {
  [nodeId: string]: GraphNode
}

export type GraphNodeArray = GraphNode[]

interface GraphOptions {
    directed?: boolean,
    multiGraph?: boolean,
    compound?: boolean,
    rankDir?: string,
    rankSep?: number,
    edgeSep?: number,
    nodeSep?: number,
    marginX?: number,
    marginY?: number
}

export default class Graph {
  public static buildBlockGraph(layering: Matrix, root: GraphNodeList, reverseSep: boolean) {
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
          maxSep: Math.max(blockGraph.sep(reverseSep, node, to), /*prevMax || */0),
        })
        to = node
      })
    })

    return blockGraph
  }

  public layout: Layout | undefined
  public size: Size = new Size()
  public style: Style = new Style()
  public rootNode: GraphNode | undefined
  public nodeRankFactor: number = 0
  public compound: boolean = false
  public multiGraph: boolean = false
  public directed: boolean = true

  public rankDir: string = 'tb'
  public minX: number = 0
  public minY: number = 0
  public maxX: number = 0
  public maxY: number = 0
  public marginX: number = 20
  public marginY: number = 20
  public randomId: number = 1

  public dummyChain: GraphNodeArray = []

  public rankSep: number = 50
  public edgeSep: number = 20
  public nodeSep: number = 50

  public maxRank: number | undefined

  public ranker: 'network-simplex' | 'tight-tree' | 'longest-path' = 'network-simplex'

  private NODES: GraphNodeList = {}
  private EDGES: EdgeList = {}

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

  public setNode(id: string, options: NodeOptions = {}): GraphNode {
    if (this.NODES[id]) {
      if (options) {
        this.NODES[id].setOptions(options)
      }
      return this.NODES[id]
    }

    gdb('creating node', id, options)

    this.NODES[id] = new GraphNode(id, options)
    return this.NODES[id]
  }

  public removeNode(id: string) {
    gdb('removing node id', id)
    const node = this.NODES[id]
    if (!node) {
      return
    }

    Object.keys(node.inEdges).forEach(this.removeEdge, this)
    Object.keys(node.outEdges[id]).forEach(this.removeEdge, this)

    delete this.NODES[id]
  }

  public setEdge(fromId: string, toId: string, options: EdgeOptions = {}) {
    gdb('setting edge', fromId, toId, options)

    const edgeId = Edge.generateId(fromId, toId, this.directed, options.name)

    if (this.EDGES[edgeId]) {
      if (options) {
        this.EDGES[edgeId].setOptions(options)
      }
      return this
    }

    // first ensure the nodes exist
    const fromNode = this.setNode(fromId)
    const toNode = this.setNode(toId)

    const edge = new Edge(edgeId, fromNode, toNode, options)

    this.EDGES[edgeId] = edge

    fromNode.outEdges[edgeId] = edge
    toNode.inEdges[edgeId] = edge
    return this
  }

  public removeEdge(id: string) {
    gdb('removing edge', id)
    if (!this.EDGES[id]) {
      gdb('edge', id, 'does not exist. returning...')
      return
    }

    const edge = this.EDGES[id]
    delete this.EDGES[id]
  }

  public addDummyNode(type: string, attrs: NodeOptions, name: string) {
    name = name + this.randomId++
    attrs.dummy = type
    return this.setNode(name, attrs)
  }

  public getNode(id: string) {
    return this.NODES[id]
  }

  public getEdge(fromId: string, toId: string) {
    return this.EDGES[Edge.generateId(fromId, toId, this.directed)]
  }

  public getChildren(id?: string): GraphNodeArray {
    if (!id) {
      return this.nodes
    }

    if (this.compound) {
      return Object.values(this.NODES[id].children)
    } else {
      return []
    }
  }

  public getParent(id: string) {
    if (!this.compound) {
      return null
    }

    const parent = this.NODES[id].parent
    if (parent !== null && parent.id !== GRAPH_NODE) {
      return parent
    }

    return null
  }

  public getPredecessors(node: GraphNode): string[] {
    return node.predecessors ? Object.keys(node.predecessors) : []
  }

  public getSuccessors(node: GraphNode): string[] {
    return node.successors ? Object.keys(node.successors) : []
  }

  public setParent(id: string, parentId: string) {
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
        continue
      }

      if (ancestor === id) {
        throw new Error(
          'Setting ' +
            parentId +
            ' as parent of ' +
            id +
            ' would create a cycle',
        )
      }

      ancestor = parent.id
    }

    const parentNode = this.setNode(parentId)
    const childNode = this.setNode(id)
    // delete parentNode.children[id]
    this.NODES[id].parent = parentNode
    parentNode.children[id] = childNode
  }

  public nodeEdges(from: GraphNode, to?: GraphNode) {
    const inEdges =  this.inEdges(from, to)
    if (inEdges) {
      return inEdges.concat(this.outEdges(from, to))
    }
    return []
  }

  public isSubgraph(id: string) {
    return this.getChildren(id).length !== 0
  }

  public doLayout() {
    gdb('layouting graph')
    this.layout = new Layout(this)
  }

  public hasNode(id: string) {
    return this.NODES[id]
  }

  get nodes(): GraphNodeArray {
    return Object.values(this.NODES)
  }

  get edges(): EdgeArray {
    return Object.values(this.EDGES)
  }

  get sources(): GraphNodeArray {
    return this.nodes.filter(node => {
      return Object.keys(node.inEdges).length === 0
    })
  }

  public inEdges(from: GraphNode, to?: GraphNode) {
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

  public outEdges(from: GraphNode, to?: GraphNode) {
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

  get nodeIds(): string[] {
    return Object.keys(this.NODES)
  }

  public sep(reverseSep: boolean, from: GraphNode, to: GraphNode) {
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
