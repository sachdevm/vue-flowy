import GraphNode from "./graph/Node";
import Layout from "./graph/Layout";
import Edge from "./graph/Edge";

const GRAPH_NODE = '\x00'

export default class Graph {
  constructor({
      directed: directed = true,
      multiGraph: multiGraph = false,
      compound: compound = false,
      rankDir: rankdir = 'LR',
      marginX: marginX = 20,
      marginY: marginY = 20
    }) {
    this._nodes = {}
    this._edges = {}

    if (this.compound === true) {
      this.parent = {}
      this.children = {}
      this.children[GRAPH_NODE] = {}
    }

    // v -> edgeObj
    this.in = {}

    // u -> v -> Number
    this.preds = {}

    // v -> edgeObj
    this.out = {}

    // v -> w -> Number
    this.sucs = {}

    // e -> edgeObj
    this.edgeObjs = {}
  }

  setNode(id, options) {
    console.log('setting node', id, options)
    if (this._nodes[id]) {
      if (options) {
        this._nodes[id].setOptions(options)
      }
      return this
    }

    this._nodes[id] = new GraphNode(id, options)

    if (this.compound === true) {
      this.parent[id] = GRAPH_NODE
      this.children[id] = {}
      this.children[GRAPH_NODE][id] = true
    }

    this.in[id] = {}
    this.preds[id] = {}
    this.out[id] = {}
    this.sucs[id] = {}
    return this
  }

  setEdge(from, to, options) {
    console.log('setting edge', from, to, options)

    const edgeId = Edge.generateId(from, to, this.directed)

    if (this._edges[edgeId]) {
      if (options) {
        this._edges[edgeId].setOptions(options)
      }
      return this
    }

    // first ensure the nodes exist
    this.setNode(from)
    this.setNode(to)

    const edge = new Edge(edgeId, from, to, options)

    this._edges[edgeId] = edge

    this.out[from][edgeId] = edge
    this.in[to][edgeId] = edge
    return this
  }

  getNode(id) {
    return this._nodes[id]
  }

  getChildren(id) {
    if (!id) {
      id = GRAPH_NODE
    }

    if (this.compound) {
      const childArray = this.children[id]
      if (childArray) {
        return Object.keys(childArray)
      }
    } else if (id === GRAPH_NODE) {
      return this.nodes
    } else {
      return []
    }
  }

  isSubgraph(id) {
    return this.getChildren(id).length !== 0
  }

  layout() {
    console.log('layouting graph')
    const layoutGraph = new Layout(this)
  }

  /**
   * @returns {Array<{label: string}>} all nodes of the graph
   */
  get nodes() {
    return Object.values(this._nodes)
  }

  /**
   * @returns {Array<string>} array of all node IDs
   */
  get nodeIds() {
    return Object.keys(this._nodes)
  }
}
