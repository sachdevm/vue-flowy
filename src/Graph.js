import GraphNode from './graph/Node'
import Layout from './graph/Layout'
import Edge from './graph/Edge'

const GRAPH_NODE = '\x00'

export default class Graph {
  constructor({
    directed: directed = true,
    multiGraph: multiGraph = false,
    compound: compound = false,
    rankDir: rankDir = 'TB',
    rankSep: rankSep = 50,
    edgeSep: edgeSep = 20,
    nodeSep: nodeSep = 50,
    marginX: marginX = 20,
    marginY: marginY = 20
  }) {
    /** @type {{id: GraphNode}} */
    this._nodes = {}
    /** @type {{id: Edge}} */
    this._edges = {}

    if (this.compound === true) {
      this.parent = {}
      this.children = {}
      this.children[GRAPH_NODE] = {}
    }

    /** @type {GraphNode} */
    this.root = null

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

  /**
   *
   * @param {string} id
   * @param {{}} options
   * @returns {GraphNode} node
   */
  setNode(id, options) {
    if (this._nodes[id]) {
      if (options) {
        this._nodes[id].setOptions(options)
      }
      return this._nodes[id]
    }

    console.log('creating node', id, options)

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
    return this._nodes[id]
  }

  /**
   *
   * @param {string} id
   */
  removeNode(id) {
    console.log('TODO: removing not finished')
    if (!this._nodes[id]) {
      return
    }

    delete this._nodes[id]

    if (this.compound) {
      delete this.parent[id]
      delete this.children[id]
    }

    delete this.in[id]
    delete this.preds[id]
    delete this.out[id]
    delete this.sucs[id]
  }

  /**
   *
   * @param {string} from
   * @param {string} to
   * @param {{}} options
   */
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
    const fromNode = this.setNode(from)
    const toNode = this.setNode(to)

    const edge = new Edge(edgeId, fromNode, toNode, options)

    this._edges[edgeId] = edge

    this.out[from][edgeId] = edge
    this.in[to][edgeId] = edge
    return this
  }

  /**
   *
   * @param {string} id
   */
  removeEdge(id) {
    console.log('TODO: removing not finished')
    if (!this.edges[id]) {
      return
    }
    /** @type {Edge} */
    const edge = this._edges[id]
    delete this.in[edge.from]
    delete this.out[edge.to]
    delete this._edges[id]
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

  /**
   *
   * @param {GraphNode} fromId
   * @param {GraphNode} toId
   */
  nodeEdges(from, to) {
    const inEdges = this.inEdges(from, to)
    if (inEdges) {
      return inEdges.concat(this.outEdges(from, to))
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
   *
   * @param {string} id
   */
  hasNode(id) {
    return this._nodes[id]
  }

  /**
   * @returns {Array<{label: string}>} all nodes of the graph
   */
  get nodes() {
    return Object.values(this._nodes)
  }

  /**
   * @returns {Array<{label: string}>} all edges of the graph
   */
  get edges() {
    return Object.values(this._edges)
  }

  get sources() {
    return this.nodes.filter(node => {
      return Object.keys(this.in[node.id]).length === 0
    })
  }

  /**
   *
   * @param {GraphNode} from
   * @param {GraphNode} to
   */
  inEdges(from, to) {
    // console.log('ins', this.in)
    let inFrom = this.in[from.id]
    // console.log('in from', from, 'to', to, inFrom)
    if (!inFrom) {
      return
    }

    const edges = Object.values(inFrom)
    if (!to) {
      return edges
    }
    return edges.filter(edge => edge.from.id === to.id)
  }

  /**
   *
   * @param {GraphNode} from
   * @param {GraphNode} to
   */
  outEdges(from, to) {
    // console.log('outs', this.out)
    let outFrom = this.out[from.id]
    // console.log('out from', from, 'to', to, outFrom)
    if (!outFrom) {
      return
    }

    const edges = Object.values(outFrom)
    if (!to) {
      return edges
    }
    return edges.filter(edge => edge.to.id === to.id)
  }

  /**
   * @returns {Array<string>} array of all node IDs
   */
  get nodeIds() {
    return Object.keys(this._nodes)
  }
}
