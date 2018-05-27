(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-flowy"] = factory();
	else
		root["vue-flowy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlowy.vue?vue&type=template&id=6244c0f8
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flowyChart",attrs:{"id":_vm._uid}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueFlowy.vue?vue&type=template&id=6244c0f8

// CONCATENATED MODULE: ./src/graph/Node.js
const defaults = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: 'rect',
  width: 0,
  height: 0
}

class GraphNode {
  constructor(id, options) {
    /** @type {string} */
    this.id = id
    this.setOptions(options)
  }

  setOptions(options = {}) {
    if (!options.label) {
      options.label = this.id
    }

    Object.assign(this, defaults, options)
  }

  setDefaults() {}
}

// CONCATENATED MODULE: ./src/graph/Edge.js
const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

const Edge_defaults = {
  minLen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labelOffset: 10,
  labelPos: 'r'
}

class Edge {
  constructor(id, from, to, options) {
    this.id = id
    this.from = from
    this.to = to
    this.order = 0
    this.points = []
    this.setOptions(options)
  }

  static generateId(from, to, directed = false) {
    if (!directed && from > to) {
      const tmp = from
      from = to
      to = tmp
    }
    return from + EDGE_KEY_DELIM + to + EDGE_KEY_DELIM + DEFAULT_EDGE_NAME
  }

  setOptions(options) {
    Object.assign(this, Edge_defaults, options)
  }
}
// CONCATENATED MODULE: ./src/graph/Layout.js




class Layout_Layout {
  /**
   *
   * @param {Graph} graph
   */
  constructor(graph) {
    /** @type {Graph} */
    this.graph = graph
    this.runLayout()
    console.log('new layout for graph', graph)
  }

  runLayout() {
    this.makeSpaceForEdgeLabels()
    this.createNestingGraph()
    this.rank()
    this.cleanupNestingGraph()
    this.order()
    this.position()
    this.translateGraph()
  }

  makeSpaceForEdgeLabels() {
    this.graph.rankSep /= 2
    console.log(this.graph)
    this.graph.edges.forEach(edge => {
      console.log('making space for edge', edge)
      edge.minLen *= 2

      if (edge.labelPos.toLowerCase() === 'c') {
        return
      }

      if (this.graph.rankDir === 'TB' || this.graph.rankDir === 'BT') {
        edge.width += edge.labelOffset
      } else {
        edge.height += edge.labelOffset
      }
    })
  }

  createNestingGraph() {
    console.log('creating nesting graph')
    this.graph.root = this.graph.setNode('_root', { dummy: 'root' })
    const depths = this.treeDepths()
    console.log('depths', depths)
    const height = Math.max(...Object.values(depths)) - 1
    const nodeSep = 2 * height + 1

    // multiply minLen by nodeSep to align nodes on non-border ranks
    this.graph.edges.forEach(edge => {
      edge.minLen *= nodeSep
    })

    // calculate a weight that is sufficient to keep subgraphs vertically compact
    const weight = this.graph.edges.reduce(
      (prevVal, edge) => prevVal + edge.weight,
      0
    )

    // create border nodes and link them up
    this.graph.getChildren().forEach(child => {
      console.log('calling dfs with', this.graph.root, nodeSep, weight, height, depths, child)
      this.dfs(this.graph.root, nodeSep, weight, height, depths, child)
    })

    this.graph.nodeRankFactor = nodeSep
  }

  cleanupNestingGraph() {
    this.graph.removeNode(this.graph.root.id)
    this.graph.root = null
    this.graph.edges.forEach(edge => {
      if (edge.nestingEdge) {
        this.graph.removeEdge(edge.id)
      }
    })
  }

  treeDepths() {
    const depths = {}
    const layout = this

    function dfs(nodeId, depth = 1) {
      const children = layout.graph.getChildren(nodeId)
      console.log('children of', nodeId, 'are', children, '. depth:', depth)
      if (children && children.length) {
        children.forEach(childId => {
          console.log('child', childId)
          dfs(childId, depth + 1)
        })
      }
      depths[nodeId] = depth
    }
    this.graph.getChildren().forEach(childId => {
      dfs(childId)
    })
    return depths
  }

  /**
   *
   * @param {GraphNode} root
   * @param {*} nodeSep
   * @param {*} weight
   * @param {*} height
   * @param {*} depths
   * @param {GraphNode} node
   */
  dfs(root, nodeSep, weight, height, depths, nodeId) {
    const children = this.graph.getChildren(nodeId)
    console.log('DFS: children of', nodeId, children)
    if (!children.length) {
      if (nodeId !== root.id) {
        this.graph.setEdge(root.id, nodeId, { weight: 0, minLen: nodeSep })
      }
      return
    }

    const top = this.addBorderNode('_bt')
    const bottom = this.addBorderNode('_bb')

    this.graph.setParent(top, nodeId)
    this.graph.borderTop = top
    this.graph.setParent(bottom, nodeId)
    this.graph.borderBottom = bottom

    const dfs = this.dfs

    children.forEach(child => {
      this.dfs(root, nodeSep, weight, height, depths, child)

      const childTop = child.borderTop ? child.borderTop : child
      const childBottom = child.borderBottom ? child.borderBottom : child
      const thisWeight = child.borderTop ? weight : 2 * weight
      const minLen = childTop !== childBottom ? 1 : height - depths[nodeId] + 1

      this.graph.setEdge(top, childTop, {
        weight: thisWeight,
        minLen: minLen,
        nestingEdge: true
      })

      this.graph.setEdge(childBottom, bottom, {
        weight: thisWeight,
        minLen: minLen,
        nestingEdge: true
      })
    })

    if (!this.graph.parent(nodeId)) {
      this.graph.setEdge(root, top, {
        weight: 0,
        minLen: height + depths[nodeId]
      })
    }
  }

  addBorderNode(prefix, rank, order) {
    const node = {
      width: 0,
      height: 0
    }
    if (rank && order) {
      node.rank = rank
      node.order = order
    }
    return this.addDummyNode('border', node, prefix)
  }

  addDummyNode(type, attrs, name) {
    attrs.dummy = type
    this.graph.setNode(name, attrs)
    return name
  }

  rank() {
    switch (this.graph.ranker) {
      case 'network-simplex':
        this.networkSimplexRanker()
        break
      case 'tight-tree':
        this.tightTreeRanker()
        break
      case 'longest-path':
        this.longestPathRanker()
        break
      default:
        this.networkSimplexRanker()
        break
    }
  }

  position() {
    this.positionY()
  }

  positionX() {
    const layering = this.buildLayerMatrix()
  }

  positionY() {
    const layering = this.buildLayerMatrix()
    console.log('layering', layering)
    const rankSep = this.graph.rankSep
    let prevY = 0
    layering.forEach(layer => {
      const maxHeight = Math.max(
        layer.map(node => {
          return node.height
        })
      )
      console.log('maxHeight of nodes layer', maxHeight)
      layer.forEach(node => {
        node.y = prevY + maxHeight / 2
      })
      prevY += maxHeight + rankSep
    })
  }

  buildLayerMatrix() {
    const layering = []
    this.graph.nodes.forEach(node => {
      console.log('creating layer with node', node, node.rank)
      if (node.rank) {
        if (!layering[node.rank]) {
          layering[node.rank] = []
        }
        layering[node.rank][node.order] = node
      }
    })

    return layering
  }

  networkSimplexRanker() {
    this.longestPath()
    this.feasibleTree()
  }

  longestPath() {
    const layout = this
    const visited = {}

    function _longestPath(node) {
      if (visited[node.id]) {
        return node.rank
      }
      visited[node.id] = true

      const min = Math.min(...layout.graph.outEdges(node).map(outEdge => {
          return _longestPath(outEdge.to) - outEdge.minLen
      }))
      const rank = min === Infinity ? 0 : min

      return (node.rank = rank)
    }

    this.graph.sources.forEach(_longestPath)
  }

  feasibleTree() {
    this.treeGraph = new Graph_Graph({ directed: false })

    const start = this.graph.nodeIds[0]
    const size = this.graph.nodeIds.length
    this.treeGraph.setNode(start)
    console.log('start is', start, 'size is', size)

    let edge
    let delta
    let doneTimes = 0
    while (this.tightTree() < size) {
      edge = this.findMinSlackEdge()
      delta = this.treeGraph.hasNode(edge.from.id)
        ? this.slack(edge)
        : -this.slack(edge)
      this.shiftRanks(delta)
      doneTimes++
      if (doneTimes > 200) {
        throw new Error('too many loops, breaking now!')
      }
    }
  }

  /**
   * Finds a maximal tree of tight edges and returns the number of nodes in the tree
   */
  tightTree() {
    const layout = this
    function dfs(node) {
      console.log('nodeEdges', layout.graph.nodeEdges(node))
      layout.graph.nodeEdges(node).forEach(edge => {
        console.log('nodeEdge for', node.id, edge)
        const to = node.id === edge.from.id ? edge.to : edge.from
        console.log('not hasNode', !layout.treeGraph.hasNode(to.id), 'not slack', !layout.slack(edge))
        if (!layout.treeGraph.hasNode(to.id) && !layout.slack(edge)) {
          console.log('adding node to tighttree', to)
          layout.treeGraph.setNode(to.id)
          layout.treeGraph.setEdge(node.id, to.id)
          dfs(to)
        }
      })
    }

    this.treeGraph.nodes.forEach(dfs)
    console.log('tightTree size is', this.treeGraph.nodeIds.length)
    return this.treeGraph.nodeIds.length
  }

  findMinSlackEdge() {
    let minSlackEdge
    let minSlack = Infinity

    console.log('finding min slack edge')

    this.graph.edges.forEach(edge => {
      if (
        this.treeGraph.hasNode(edge.from.id) !==
        this.treeGraph.hasNode(edge.to.id)
      ) {
        const slack = this.slack(edge)
        if (slack < minSlack) {
          minSlackEdge = edge
          minSlack = slack
        }
      }
    })

    return minSlackEdge
  }

  /**
   * Returns the amount of slack for the given edge. The slack is defined as the difference
   * between the length of the edge and its minimum length
   * @param {Edge} edge
   */
  slack(edge) {
    console.log(
      'calculating slack of',
      edge,
      edge.to.rank,
      edge.from.rank,
      edge.minLen
    )
    return edge.to.rank - edge.from.rank - edge.minLen
  }

  order() {
    const maxRank = this.maxRank()
    console.log('STOPPED HERE, code further!')
    // const downLayerGraphs = buildLayerGraphs(g, _.range(1, maxRank + 1), 'inEdges')
    // const upLayerGraphs = buildLayerGraphs(g, _.range(maxRank - 1, -1, -1), 'outEdges')

    // let layering = initOrder(g)
    // assignOrder(g, layering)

    // let bestCC = Number.POSITIVE_INFINITY
    // let best

    // for (let i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    //   sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2)

    //   layering = util.buildLayerMatrix(g)
    //   const cc = crossCount(g, layering)
    //   if (cc < bestCC) {
    //     lastBest = 0
    //     best = _.cloneDeep(layering)
    //     bestCC = cc
    //   }
    // }

    // assignOrder(g, best)
  }

  maxRank() {
    this.graph.nodes.reduce((prevV, node) => {
      return node.rank > prevV ? node.rank : prevV
    }, -Infinity)
  }

  shiftRanks(delta) {
    this.treeGraph.nodes.forEach(node => {
      node.rank += delta
    })
  }

  translateGraph() {
    let minX = Infinity
    let maxX = 0
    let minY = Infinity
    let maxY = 0
    const marginX = this.graph.marginX || 0
    const marginY = this.graph.marginY || 0

    function getExtremes(o) {
      const x = o.x
      const y = o.y
      const w = o.width
      const h = o.height
      minX = Math.min(minX, x - w / 2)
      maxX = Math.max(maxX, x + w / 2)
      minY = Math.min(minY, y - h / 2)
      maxY = Math.max(maxY, y + h / 2)
    }

    this.graph.nodes.forEach(getExtremes)

    this.graph.edges.forEach(edge => {
      if (edge.x) {
        getExtremes(edge)
      }
    })

    minX -= marginX
    minY -= marginY

    this.graph.nodes.forEach(node => {
      node.x -= minX
      node.y -= minY
    })

    this.graph.edges.forEach(edge => {
      edge.points.forEach(point => {
        point.x -= minX
        point.y -= minY
      })

      if (edge.x) {
        edge.x -= minX
      }

      if (edge.y) {
        edge.y -= minY
      }
    })

    this.graph.width = maxX - minX + marginX
    this.graph.height = maxY - minY + marginY
  }
}

// CONCATENATED MODULE: ./src/Graph.js




const GRAPH_NODE = '\x00'

class Graph_Graph {
  constructor({
    directed = true,
    multiGraph = false,
    compound = false,
    rankDir = 'TB',
    rankSep = 50,
    edgeSep = 20,
    nodeSep = 50,
    marginX = 20,
    marginY = 20
  }) {
    Object.assign(this, {
      directed,
      multiGraph,
      compound,
      rankDir,
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

  layout() {
    console.log('layouting graph')
    const layoutGraph = new Layout_Layout(this)
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

// CONCATENATED MODULE: ./src/graph/Svg.js
class GraphSvg {
  constructor(tag) {
    /**
     * @type {HTMLElement}
     */
    this.node = document.createElementNS('http://www.w3.org/2000/svg', tag)
  }

  /**
   *
   * @param {string|GraphSvg} tag
   * @returns {GraphSvg}
   */
  append(el) {
    if (!(el instanceof GraphSvg)) {
      el = new GraphSvg(el)
    }
    this.node.appendChild(el.node)
    return el
  }

  attr(attribute, value) {
    this.node.setAttribute(attribute, value)
    return this
  }

  select(selector) {
    const res = this.node.querySelector(selector)
    if (res) {
      return new GraphSvg(res)
    }

    return null
  }

  selectAll(selector) {
    const res = this.node.querySelectorAll(selector)
    if (res) {
      return Array.from(res).map(node => new GraphSvg(node))
    }

    return null
  }

  text(s) {
    const el = document.createTextNode(s)
    this.node.appendChild(el)
    return this
  }

  /**
   *
   * @param {string} c
   */
  addClass(c) {
    this.node.classList.add(c)
    return this
  }
}

// CONCATENATED MODULE: ./src/graph/Shape.js


class Shape_Shape {

  /**
   * 
   * @param {string} shapeType 
   * @param {Object} bbox 
   * @param {Object} options 
   */
  constructor(shapeType, bbox, options) {
    /** @type {GraphSvg} */
    this.shape = this[shapeType](bbox, options)
    console.log('inside bbox', this.shape.node.getBBox())
  }
  /**
   * 
   * @param {Object} bbox 
   * @param {Object} options 
   */
  rect(bbox, options) {
    console.log('bbox', bbox)
    return new GraphSvg('rect')
      .attr('rx', options.rx)
      .attr('ry', options.ry)
      .attr('x', -bbox.width / 2)
      .attr('y', -bbox.height / 2)
      .attr('width', bbox.width)
      .attr('height', bbox.height)
      .attr('rx', options.rx)
  }
}
// CONCATENATED MODULE: ./src/graph/Label.js


class Label_GraphLabel {
  constructor(labelData) {
    this.group = new GraphSvg('g')
    this.labelData = labelData

    this.textLabel()
  }

  textLabel() {
    const text = this.group.append('text').text(this.labelData.label)
  }
}
// CONCATENATED MODULE: ./src/Renderer.js





class Renderer_Renderer {
  /**
   *
   * @param {Graph} graph
   */
  constructor(graph) {
    this.graph = graph
  }

  render(svg) {
    console.log('rendering', svg, this.graph)
    // TODO: remove all children of svg

    const edgePathsGroup = this.createOrSelectGroup(svg, 'edgePaths')
    const edgeLabels = this.createEdgeLabels(
      this.createOrSelectGroup(svg, 'edgeLabels'),
      this.graph
    )
    this.createNodes(this.createOrSelectGroup(svg, 'nodes'))

    this.graph.layout()

    let minX = 1000
    let minY = 1000
    let maxX = -1000
    let maxY = -1000

    this.graph.nodes.forEach(node => {
      minX = Math.min(minX, node.x - node.width / 2)
      minY = Math.min(minY, node.y - node.height / 2)
      maxX = Math.max(maxX, node.x + node.width / 2)
      maxY = Math.max(maxY, node.y + node.height / 2)
    })

    this.graph.edges.forEach(edge => {
      if (edge.label && edge.x && edge.y) {
        minX = Math.min(minX, edge.x - edge.width / 2)
        minY = Math.min(minY, edge.y - edge.height / 2)
        maxX = Math.max(maxX, edge.x + edge.width / 2)
        maxY = Math.max(maxY, edge.y + edge.height / 2)
      }
      const points = edge.points.slice(1, edge.points.length - 1) // intersetion points don't matter
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        minX = Math.min(minX, point.x)
        minY = Math.min(minY, point.y)
        maxX = Math.max(maxX, point.x)
        maxY = Math.max(maxY, point.y)
      }
    })

    this.graph.minX = minX
    this.graph.minY = minY
    this.graph.maxX = maxX
    this.graph.maxY = maxY

    console.log('GRAPH', this.graph)

    this.positionNodes()
  }

  /**
   *
   * @param {GraphSvg} selection
   * @param {Graph} graph
   */
  createNodes(selection) {
    const simpleNodes = this.graph.nodeIds.filter(id => {
      return !this.graph.isSubgraph(id)
    })

    // we have to append all simpleNodes to the graph now
    this.graph.nodes.forEach(graphNode => {
      const nodeGroup = selection.append('g').addClass('node')

      const labelGroup = nodeGroup.append('g').addClass('label')
      const label = labelGroup.append(
        new Label_GraphLabel({ label: graphNode.label }).group
      )
      const labelBBox = label.node.getBBox()

      labelBBox.width += graphNode.paddingLeft + graphNode.paddingRight
      labelBBox.height += graphNode.paddingTop + graphNode.paddingBottom

      labelGroup.attr(
        'transform',
        'translate(' +
          (graphNode.paddingLeft - graphNode.paddingRight) / 2 +
          ',' +
          (graphNode.paddingTop - graphNode.paddingBottom) / 2 +
          ')'
      )

      // nodeGroup.node.style.opacity = 0

      const shape = nodeGroup.append(
        new Shape_Shape(graphNode.shape, labelBBox, graphNode).shape
      )
      const shapeBBox = shape.node.getBBox()
      graphNode.width = shapeBBox.width
      graphNode.height = shapeBBox.height
      nodeGroup.append(labelGroup)
      graphNode.svgGroup = nodeGroup
    })
    // let svgNodes = selection.querySelectorAll('g.node')
    // svgNodes.forEach((svgNode) => {

    //   svgNode.classList.add('update')
    // })

    // for (const node of nodes) {
    //   const shape = shapes[node.shape]
    // }
  }

  createLabel(selection) {}

  /**
   *
   * @param {GraphSvg} selection
   * @param {Graph} g
   */
  createEdgeLabels(selection, g) {
    let svgEdgeLabels = selection.selectAll('g.edgeLabel')

    this.graph.edges.forEach(edge => {
      const edgeLabelGroup = selection.append('g').addClass('edgeLabel')

      const labelGroup = edgeLabelGroup.append('g').addClass('label')
      const label = labelGroup.append(
        new Label_GraphLabel({ label: edge.label }).group
      )
      const labelBBox = label.node.getBBox()

      edge.width = edge.width || labelBBox.width
      edge.height = edge.height || labelBBox.height
    })
  }

  positionNodes() {
    console.log(
      'position nodes',
      this.graph.nodes,
      'with edges',
      this.graph.edges
    )
    this.graph.nodes.forEach(graphNode => {
      graphNode.svgGroup.attr(
        'transform',
        'translate(' + graphNode.x + ',' + graphNode.y + ')'
      )
    })
  }

  /**
   *
   * @param {GraphSvg} root
   * @param {string} name
   */
  createOrSelectGroup(root, name) {
    return root.select('g.' + name) || root.append('g').addClass(name)
  }
}

// CONCATENATED MODULE: ./src/FlowElement.js
class FlowElement {
  constructor(id, options) {
    this.id = id
    this.options = options
    this.edges = []
  }

  leadsTo(destinationElement, options) {
    this.edges.push({ otherId: destinationElement.id, options })
    return destinationElement
  }
}

// CONCATENATED MODULE: ./src/FlowChart.js
// import {} from "d3"
// import {Graph} from "graphlibrary"
// import dagreD3 from "dagre-d3-renderer"





class FlowChart_FlowChart {
  constructor(options) {
    this.elements = []
  }

  addElement(id, options) {
    const el = new FlowElement(id, options)
    this.elements.push(el)
    return el
  }

  render(element) {
    const svg = new GraphSvg('svg')
    svg.node.id = 'f' + element.id
    element.appendChild(svg.node)
    const group = svg.append('g')

    // Create the input graph
    const graph = new Graph_Graph({
      multiGraph: true,
      compound: true,
      rankDir: 'LR',
      marginX: 20,
      marginY: 20
    })

    // first create all nodes
    for (const i in this.elements) {
      const el = this.elements[i]
      graph.setNode(el.id, el.options)
    }

    // now apply some styles to all nodes
    for (const node of graph.nodes) {
      node.rx = node.ry = 5
    }

    // now create all edges
    for (const i in this.elements) {
      const el = this.elements[i]
      for (const k in el.edges) {
        const edge = el.edges[k]

        graph.setEdge(el.id, edge.otherId, edge.options)
      }
    }

    const renderer = new Renderer_Renderer(graph)

    renderer.render(group)

    // const svgElement = document.getElementById('f' + element.id)
    // const groupElement = svgElement.querySelector('g')
    // svgElement.style.width = groupElement.getBoundingClientRect().width + 40
    // svgElement.style.height = groupElement.getBoundingClientRect().height + 40
  }
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/VueFlowy.vue?vue&type=script&lang=js
//
//
//
//
//
//



/* harmony default export */ var VueFlowyvue_type_script_lang_js = ({
  name: 'VueFlowy',
  props: {
    chart: {
      type: FlowChart_FlowChart,
      required: true
    }
  },
  data() {
    return {
      chartElement: null
    }
  },
  watch: {
    'chart.elements': function(newVal, oldVal) {
      this.chart.render(this.chartElement)
    }
  },
  mounted() {
    this.chartElement = document.getElementById(this._uid)
  }
});

// CONCATENATED MODULE: ./src/VueFlowy.vue?vue&type=script&lang=js
 /* harmony default export */ var src_VueFlowyvue_type_script_lang_js = (VueFlowyvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/VueFlowy.vue?vue&type=style&index=0&lang=scss
var VueFlowyvue_type_style_index_0_lang_scss = __webpack_require__("E1aB");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/VueFlowy.vue






/* normalize component */

var component = normalizeComponent(
  src_VueFlowyvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueFlowy = (component.exports);
// CONCATENATED MODULE: ./src/main.js



const main_plugin = {
  install: Vue => {
    Vue.component(VueFlowy.name, VueFlowy)
  }
}

VueFlowy.install = main_plugin.install

/* harmony default export */ var main = ({ VueFlowy: VueFlowy, FlowChart: FlowChart_FlowChart });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "E1aB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yF/8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "yF/8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-flowy.umd.js.map