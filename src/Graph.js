import GraphNode from './graph/Node'
import Layout from './graph/Layout'
import Edge from './graph/Edge'
import debug from 'debug'

const gdb = debug('graph')
const GRAPH_NODE = '\x00'

export default class Graph {
  constructor({
    directed = true,
    multiGraph = false,
    compound = false,
    rankDir = 'tb',
    rankSep = 50,
    edgeSep = 20,
    nodeSep = 50,
    marginX = 20,
    marginY = 20
  } = {}) {
    Object.assign(this, {
      directed,
      multiGraph,
      compound,
      rankDir: rankDir.toLowerCase(),
      rankSep,
      edgeSep,
      nodeSep,
      marginX,
      marginY
    })
    /** @type {{id: GraphNode}} */
    this._nodes = {}
    /** @type {{id: Edge}} */
    this._edges = {}

    if (this.compound === true) {
      this.parent = {}
      this.children = {}
      this.children[GRAPH_NODE] = {}
    }

    this.randomId = 1

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

    gdb('creating node', id, options)

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
    gdb('removing node id', id)
    if (!this._nodes[id]) {
      return
    }

    delete this._nodes[id]

    if (this.compound) {
      delete this.parent[id]
      delete this.children[id]
    }

    Object.keys(this.in[id]).forEach(this.removeEdge, this)
    delete this.in[id]
    delete this.preds[id]

    Object.keys(this.out[id]).forEach(this.removeEdge, this)
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
    gdb('setting edge', from, to, options)

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
    gdb('removing edge', id)
    if (!this._edges[id]) {
      gdb('edge', id, 'does not exist. returning...')
      return
    }
    /** @type {Edge} */
    const edge = this._edges[id]
    delete this.in[edge.from]
    delete this.out[edge.to]
    delete this._edges[id]
  }

  addDummyNode(type, attrs, name) {
    name = name + this.randomId++
    attrs.dummy = type
    this.setNode(name, attrs)
    return name
  }

  getNode(id) {
    return this._nodes[id]
  }

  getEdge(fromId, toId) {
    return this._edges[Edge.generateId(fromId, toId, this.directed)]
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
   * @param {GraphNode} node 
   */
  getPredecessors(node) {
    if (this.preds[node.id]) {
      return Object.keys(this.preds[node.id])
    }
  }

  /**
   * 
   * @param {GraphNode} node 
   */
  getSuccessors(node) {
    if (this.sucs[node.id]) {
      return Object.keys(this.sucs[node.id])
    }
  }

  setParent(id, parentId) {
    if (!this.compound) {
      throw new Error('Cannot set parent in a non-compound graph')
    }

    if (!parentId) {
      parentId = GRAPH_NODE
    } else {
      // Coerce parent to string
      for (let ancestor = parent; !ancestor; ancestor = this.parent(ancestor)) {
        if (ancestor === id) {
          throw new Error(
            'Setting ' +
              parentId +
              ' as parent of ' +
              id +
              ' would create a cycle'
          )
        }
      }
  
      this.setNode(parentId)
    }
  
    this.setNode(id)
    delete this.children[parentId][id]
    this.parent[id] = parentId
    this.children[parentId][id] = true
  }

  /**
   *
   * @param {GraphNode} from
   * @param {GraphNode} to
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

  doLayout() {
    gdb('layouting graph')
    this.layout = new Layout(this)
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
    // gdb('ins', this.in)
    let inFrom = this.in[from.id]
    // gdb('in from', from, 'to', to, inFrom)
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
    // gdb('outs', this.out)
    let outFrom = this.out[from.id]
    // gdb('out from', from, 'to', to, outFrom)
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

  static buildBlockGraph(layering, root, reverseSep) {
    const blockGraph = new Graph()
    
    layering.forEach(layer => {
      let to
      layer.forEach(node => {
        blockGraph.setNode(root[node.id].id)
        if (to) {
          const prevMax = blockGraph.getEdge(root[to.id], root[node.id])
          blockGraph.setEdge(root[to.id].id, root[node.id].id, {data: {unknown: Math.max(blockGraph.sep(reverseSep, node, to), prevMax || 0)}})
        }
        to = node
      })
    })

    return blockGraph
  }

  sep(reverseSep, from, to) {
    let sum = 0
    let delta

    sum += from.width / 2
    if (from.labelPos) {
      switch (from.labelPos.toLowerCase()) {
        case 'l':
          delta = -from.width / 2
          break
        case 'r':
          delta = from.width / 2
          break
      }
    }

    if (delta) {
      sum += reverseSep ? delta : -delta
    }
    delta = 0

    sum += (from.dummy ? this.edgeSep : this.nodeSep) / 2
    sum += (to.dummy ? this.edgeSep : this.nodeSep) / 2

    sum += to.width / 2

    if (to.labelPos) {
      switch (to.labelPos.toLowerCase()) {
        case 'l':
          delta = to.width / 2
          break
        case 'r':
          delta = -to.width / 2
          break
      }
    }

    if (delta) {
      sum += reverseSep ? delta : -delta
    }
    delta = 0

    return sum
  }
}
