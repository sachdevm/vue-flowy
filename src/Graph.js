const GRAPH_NODE = '\x00'
const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

function edgeArgsToId(directed, v, w, name) {
  if (!directed && v > w) {
    const tmp = v
    v = w
    w = tmp
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (name || DEFAULT_EDGE_NAME)
}

export default class Graph {
  constructor(options) {
    this.directed = options.directed || true
    this.multiGraph = options.multiGraph || false
    this.compound = options.compound || false

    // v -> label
    this._nodes = {}

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

    // e -> label
    this.edgeLabels = {}
  }

  setGraph(label) {
    this.label = label
  }

  setNode(v, value) {
    if (this._nodes[v]) {
      if (value) {
        this._nodes[v] = value
      }
      return this
    }

    this._nodes[v] = value || null

    if (this.compound === true) {
      this.parent[v] = GRAPH_NODE
      this.children[v] = {}
      this.children[GRAPH_NODE][v] = true
    }
    this.in[v] = {}
    this.preds[v] = {}
    this.out[v] = {}
    this.sucs[v] = {}
    this.nodeCount++
    return this
  }

  setEdge(from, to, options) {
    this.setNode(from)
    this.setNode(to)

    const e = edgeArgsToId(this.directed, from, to, name)

    if (this.edgeLabels[e]) {
      if (options) {
        this.edgeLabels[e] = options
      }
      return this
    }

    this.out[from]
    this.in[to]
    this.edgeCount++
  }

  getNode(id) {
    return this._nodes[id]
  }

  get nodes() {
    return Object.values(this._nodes)
  }
}
