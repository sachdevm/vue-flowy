module.exports =
/******/ (function(modules) { // webpackBootstrap
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

// CONCATENATED MODULE: ./src/graph/layout/Size.js
class Size {
  constructor() {
    this.width = 0
    this.height = 0
  }
}
// CONCATENATED MODULE: ./src/graph/Edge.js



const DEFAULT_EDGE_NAME = '\x00'
const EDGE_KEY_DELIM = '\x01'

const defaults = {
  minLen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labelOffset: 10,
  labelPos: 'r'
}

class Edge_Edge {
  constructor(id, from, to, options) {
    this.id = id
    this.from = from
    this.to = to
    this.order = 0
    this.points = []
    this.data = {}
    this.position = new Position()
    this.size = new Size()
    Object.assign(this, defaults)
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
    Object.assign(this, options)
  }
}
// EXTERNAL MODULE: ./node_modules/debug/src/browser.js
var browser = __webpack_require__("NOtv");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./src/graph/layout/Layering.js



const log = browser_default()('layering')

class Layering_Layering {
  /**
   * 
   * @param {Graph} graph 
   */
  constructor(graph) {
    this.graph = graph
    this.matrix = this._buildLayerMatrix()
  }

  _buildLayerMatrix() {
    const layering = []
    this.graph.nodes.forEach(node => {
      if (!layering[node.rank]) {
        layering[node.rank] = []
      }
      layering[node.rank][node.order] = node
    })

    return layering
  }

  calculatePositions() {
    this._calculateYPositions()
    this._calculateXPositions()
  }

  _calculateYPositions() {
    let prevY = 0
    this.matrix.forEach(layer => {
      const maxHeight = Math.max(
        ...layer.map(node => {
          return node.height
        })
      )
      layer.forEach(node => {
        log('assigning y', node.id, prevY, maxHeight / 2, prevY + maxHeight / 2)
        node.position.y = prevY + maxHeight / 2
      })
      prevY += maxHeight + this.graph.rankSep
    })
  }

  _calculateXPositions() {
    log('is', this.matrix)
    const xPositions = {}
    let adjustedLayering
    const verticals = ['u', 'd']
    const horizontals = ['l', 'r']
    verticals.forEach(vert => {
      console.log('calculating with', vert)
      adjustedLayering = vert === 'u' ? this.matrix : Object.values(this.matrix).reverse()

      horizontals.forEach(horiz => {
        if (horiz === 'r') {
          adjustedLayering = adjustedLayering.map(inner => Object.values(inner).reverse())
        }
        
        const align = this._verticalAlignment(adjustedLayering, vert, horiz)
        let xs = this._horizontalCompaction(adjustedLayering, align, horiz)
        log(vert + horiz, xs)
        if (horiz === 'r') {
          for (const key in xs) {
            xs[key] = -xs[key]
          }
        }
        xPositions[vert + horiz] = xs
      })
    })

    log('xPositions finish', xPositions)

    const smallestWidthAlignment = this._findSmallestWidthAlignment(xPositions)
    this._alignCoordinates(xPositions, smallestWidthAlignment)
    return
  }

  _alignCoordinates(xPositions, smallestWidthAlignment) {

    const alignToVals = Object.values(smallestWidthAlignment)
    const alignToMin = Math.min(...alignToVals)
    const alignToMax = math.max(...alignToVals)

    const verticals = ['u', 'd']
    const horizontals = ['l', 'r']
    verticals.forEach(vert => {
      horizontals.forEach(horiz => {
        const alignment = vert + horiz
        const xs = xPositions[alignment]
        if (xs === smallestWidthAlignment) {
          return
        }
        const xsVals = Object.values(xs)
        const delta = horiz === 'l' ? alignToMin - Math.min(...xsVals) : alignToMax - Math.max(...xsVals)

        if (delta) {
          for (const i in xs) {
            xPositions[alignment] = xs[i] + delta
          }
        }
      })
    })
  }

  _findSmallestWidthAlignment(xPositions) {
    const min = Infinity
    Object.values(xPositions).forEach(x => {
      // log('XS is', x)
      const min = 0
      const max = 0
      return max - min
    })
  }

  _horizontalCompaction(layering, align, reverseSep) {
    log('horizontalCompaction', layering, align, reverseSep)
    const xs = {}
    const blockGraph = Graph_Graph.buildBlockGraph(layering, align.root, reverseSep)

    const visited = {}
    function pass1 (node) {
      if (visited[node.id]) {
        return
      }
      visited[node.id] = true
      xs[node.id] = blockGraph.inEdges(node).reduce((max, edge) => {
        pass1(edge.from)
        log('pass1', blockGraph, edge)
        return Math.max(max, xs[edge.from] + edge.data.unknown)
      }, 0)
    }
    blockGraph.nodes.forEach(pass1)

    Object.keys(align.align).forEach(nodeId => {
      xs[nodeId] = xs[align.root[nodeId]]
    })

    return xs
  }

  _verticalAlignment(layering, vert, horiz) {
    const root = {}
    const align = {}
    const pos = {}

    layering.forEach(layer => {
      layer.forEach((node, order) => {
        root[node.id] = node
        align[node.id] = node
        pos[node.id] = order
      })
    })

    layering.forEach(layer => {
      let prevIdx = -1
      layer.forEach(node => {
        let ws = (vert === 'u') ? this.graph.getPredecessors(node) : this.graph.getSuccessors(node)
        if (!ws.length) {
          return
        }
        ws = this.graph.layout.sortByFunction(ws, (w) => pos[w])
        const mp = (ws.length - 1) / 2
        for (let i = Math.floor(mp), il = Math.ceil(mp); i <= il; i++) {
          const w = ws[i]
          if (align[node.id].id === node.id && prevIdx < pos[w]) {
            align[w] = node
            align[node.id] = root[node.id] = root[w]
            prevIdx = pos[w]
          }          
        }
      })
    })

    return {root, align}
  }
  
}
// CONCATENATED MODULE: ./src/graph/layout/Normalizer.js




const Normalizer_log = browser_default()('normalizer')

class Normalizer {
  /**
   *
   * @param {Graph} graph
   */
  constructor(graph) {
    this.graph = graph
  }

  normalize() {
    this.graph.dummyChains = []
    Normalizer_log('EDGES', this.graph.edges)
    this.graph.edges.forEach(this._normalizeEdge, this)
  }

  /**
   *
   * @param {Edge} edge
   */
  _normalizeEdge(edge) {
    if (edge.to.rank === edge.from.rank + 1) {
      return
    }

    Normalizer_log('not returning for', edge)

    console.log(edge.from.rank, edge.to.rank)
    for (let i = edge.from.rank; i < edge.to.rank; i++) {
      edge.points = []
      let dummy = this.graph.addDummyNode(
        'edge',
        { rank: edge.from.rank },
        '_d'
      )
      Normalizer_log('created dummy', dummy)
      this.graph.setEdge(edge.from.id, dummy, { weight: edge.weight }, name)
    }
  }
}

// CONCATENATED MODULE: ./src/graph/Layout.js








const ldb = browser_default()('layout')

class Layout_Layout {
  /**
   *
   * @param {Graph} graph
   */
  constructor(graph) {
    /** @type {Graph} */
    this.graph = graph
    this.runLayout()
    ldb('new layout for graph', graph)
  }

  runLayout() {
    this.makeSpaceForEdgeLabels()
    this.createNestingGraph()
    this.rank()
    this.cleanupNestingGraph()
    this.normalizeRanks()

    this.normalizer = new Normalizer(this.graph)
    this.normalizer.normalize()

    this.order()
    this.adjustCoordinateSystem()

    this.layering = new Layering_Layering(this.graph)
    this.layering.calculatePositions()
    this.undoCoordinateSystem()
    this.translateGraph()
  }

  makeSpaceForEdgeLabels() {
    this.graph.rankSep /= 2
    ldb(this.graph)
    this.graph.edges.forEach(edge => {
      ldb('making space for edge', edge)
      edge.minLen *= 2

      if (edge.labelPos.toLowerCase() === 'c') {
        return
      }

      if (this.graph.rankDir === 'tb' || this.graph.rankDir === 'bt') {
        edge.size.width += edge.labelOffset
      } else {
        edge.size.height += edge.labelOffset
      }
    })
  }

  createNestingGraph() {
    ldb('creating nesting graph')
    this.graph.root = this.graph.setNode('_root', { dummy: 'root' })
    const depths = this.treeDepths()
    ldb('depths', depths)
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
      ldb('calling dfs with', this.graph.root, nodeSep, weight, height, depths, child)
      this.dfs(this.graph.root, nodeSep, weight, height, depths, child)
    })

    this.graph.nodeRankFactor = nodeSep
    ldb('edges after nesting graph', this.graph.edges.length)
  }

  cleanupNestingGraph() {
    this.graph.removeNode(this.graph.root.id)
    this.graph.root = null
    this.graph.edges.forEach(edge => {
      if (edge.nestingEdge) {
        this.graph.removeEdge(edge.id)
      }
    })
    ldb('edges after cleanup nesting graph', this.graph.edges.length, this.graph.edges)
  }

  normalizeRanks() {
    const minRank = this.minRank()
    this.graph.nodes.forEach(node => node.rank -= minRank)
  }

  treeDepths() {
    const depths = {}
    const layout = this

    function dfs(nodeId, depth = 1) {
      const children = layout.graph.getChildren(nodeId)
      ldb('children of', nodeId, 'are', children, '. depth:', depth)
      if (children && children.length) {
        children.forEach(childId => {
          ldb('child', childId)
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
    ldb('DFS: children of', nodeId, children)
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
    const position = new Position(graph)
    this.positionY()
    // this.positionX()
  }

  positionX() {
    const layering = this.buildLayerMatrix()

    // const xss = {}
    // let adjustedLayering
    // ['u', 'd'].forEach(vert => {
    //   adjustedLayering = vert === 'u' ? layering : Object.values(layering).reverse()
    //   ['l', 'r'].forEach(horiz => {
    //     if (horiz === 'r') {
    //       adjustedLayering = adjustedLayering.map(inner => Object.values(inner).reverse())
    //     }

    //     const align = this.verticalAlignment(adjustedLayering)

    //     xss[vert + horiz] = xs
    //   })
    // })
  }

  positionY() {
    let prevY = 0
    this.layering.forEach(layer => {
      const maxHeight = Math.max(
        layer.map(node => {
          return node.height
        })
      )
      layer.forEach(node => {
        ldb('assigning y', node.id, prevY, maxHeight / 2, prevY + maxHeight / 2)
        node.y = prevY + maxHeight / 2
      })
      prevY += maxHeight + rankSep
    })
  }

  balance(xss, align) {
    return
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
    ldb('start is', start, 'size is', size)

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
      ldb('nodeEdges', layout.graph.nodeEdges(node))
      layout.graph.nodeEdges(node).forEach(edge => {
        ldb('nodeEdge for', node.id, edge)
        const to = node.id === edge.from.id ? edge.to : edge.from
        ldb('not hasNode', !layout.treeGraph.hasNode(to.id), 'not slack', !layout.slack(edge))
        if (!layout.treeGraph.hasNode(to.id) && !layout.slack(edge)) {
          ldb('adding node to tighttree', to)
          layout.treeGraph.setNode(to.id)
          layout.treeGraph.setEdge(node.id, to.id)
          dfs(to)
        }
      })
    }

    this.treeGraph.nodes.forEach(dfs)
    ldb('tightTree size is', this.treeGraph.nodeIds.length)
    return this.treeGraph.nodeIds.length
  }

  findMinSlackEdge() {
    let minSlackEdge
    let minSlack = Infinity

    ldb('finding min slack edge')

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
    ldb(
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
    const layering = this.initOrder()
    ldb('LAYERING', layering)
    
    this.assignOrder(layering)
    // ldb('order', layering, this.graph.nodes)
    // ldb('STOPPED HERE, code further!')
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

  buildLayerGraphs(ranks, relationship) {
    return ranks.map(rank => this.buildLayerGraph(rank, relationship))
  }

  initOrder() {
    const visited = {}
    const simpleNodes = this.graph.nodes.filter(node => !this.graph.getChildren(node.id).length)
    const maxRank = this.maxRank(simpleNodes)
    const layers = []

    function dfs (node) {
      if (visited[node.id]) {
        return
      }
      visited[node.id] = true
      if (!layers[node.rank]) {
        layers[node.rank] = []
      }
      layers[node.rank].push(node)
      this.graph.getSuccessors(node).forEach(dfs)
    }

    function compare(a, b) {
      if (a.rank < b.rank) {
        return -1
      }
      if (a.rank > b.rank) {
        return 1
      }
      return 0
    }

    const orderedNodeIds = simpleNodes.sort(compare)
    orderedNodeIds.forEach(dfs, this)

    return layers
  }

  assignOrder(layering) {
    layering.forEach(layer => {
      layer.forEach((node, index) => {
        node.order = index
      })
    })
  }

  adjustCoordinateSystem() {
    if (this.graph.rankDir === 'lr' || this.graph.rankDir === 'rl') {
      this.swapWidthHeight()
    }
  }

  undoCoordinateSystem() {
    if (this.graph.rankDir === 'bt' || this.graph.rankDir === 'rl') {
      this.reverseY()
    }

    if (this.graph.rankDir === 'lr' || this.graph.rankDir === 'rl') {
      this.swapXY()
      this.swapWidthHeight()
    }
  }

  _swapWidthHeightOne(o) {
    const w = o.width
    o.width = o.height
    o.height = w
  }

  swapWidthHeight() {
    this.graph.nodes.forEach(this._swapWidthHeightOne)
    this.graph.edges.forEach(this._swapWidthHeightOne)
  }

  _swapXYOne(o) {
    const x = o.x
    o.x = o.y
    ldb('y before', o.y, 'after', x)
    o.y = x
    ldb('now', {x: o.x, y: o.y})
  }

  swapXY() {
    this.graph.nodes.forEach(this._swapXYOne)
    this.graph.edges.forEach(edge => {
      edge.points.forEach(this._swapXYOne)
      if (edge.x) {
        this._swapXYOne(edge)
      }
    })
  }

  maxRank(nodes = this.graph.nodes) {
    return nodes.reduce((prevV, node) => {
      return node.rank > prevV ? node.rank : prevV
    }, -Infinity)
  }

  minRank(nodes = this.graph.nodes) {
    return nodes.reduce((prevV, node) => {
      return node.rank < prevV ? node.rank : prevV
    }, Infinity)
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
      const x = o.x || 0
      const y = o.y || 0
      const w = o.width || 0
      const h = o.height || 0
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


  /**
   * 
   * @param {[{}]} arr 
   * @param {string} key
   */
  sortBy(arr, key) {
    function compare(a, b) {
      if (a[key] < b[key]) {
        return -1
      }
      if (a[key] > b[key]) {
        return 1
      }
      return 0
    }

    return arr.sort(compare)
  }

  /**
   * 
   * @param {[{}]} arr 
   * @param {any} fn Function for comparison
   */
  sortByFunction(arr, fn) {
    function compare(a, b) {
      if (fn(a) < fn(b)) {
        return -1
      }
      if (fn(a) > fn(b)) {
        return 1
      }
      return 0
    }

    return arr.sort(compare)
  }
}

// CONCATENATED MODULE: ./src/graph/layout/Position.js



class Position {
  /**
   * 
   * @param {Graph} graph 
   */
  constructor() {
    this.x = 0
    this.y = 0
  }
}
// CONCATENATED MODULE: ./src/graph/Node.js



const Node_defaults = {
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

class Node_GraphNode {
  constructor(id, options) {
    /** @type {string} */
    this.id = id
    this.setOptions(options)
    this.position = new Position()
    this.size = new Size()
  }

  setOptions(options = {}) {
    if (!options.label) {
      options.label = this.id
    }

    Object.assign(this, Node_defaults, options)
  }

  setDefaults() {}
}

// CONCATENATED MODULE: ./src/Graph.js





const gdb = browser_default()('graph')
const GRAPH_NODE = '\x00'

class Graph_Graph {
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

    this._nodes[id] = new Node_GraphNode(id, options)

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

    const edgeId = Edge_Edge.generateId(from, to, this.directed)

    if (this._edges[edgeId]) {
      if (options) {
        this._edges[edgeId].setOptions(options)
      }
      return this
    }

    // first ensure the nodes exist
    const fromNode = this.setNode(from)
    const toNode = this.setNode(to)

    const edge = new Edge_Edge(edgeId, fromNode, toNode, options)

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
    return this._edges[Edge_Edge.generateId(fromId, toId, this.directed)]
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
    this.layout = new Layout_Layout(this)
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
    const blockGraph = new Graph_Graph()
    
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
  }
  /**
   * 
   * @param {Object} bbox 
   * @param {Object} options 
   */
  rect(bbox, options) {
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

    this.graph.doLayout()

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
        'translate(' + (graphNode.x || 0) + ',' + (graphNode.y || 0) + ')'
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
    localStorage.debug = 'graph,layout'
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

/***/ "33yf":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Q2Ig")))

/***/ }),

/***/ "4Qej":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".flowyChart svg{display:block;margin:0 auto}.flowyChart .node rect{stroke:#999;fill:#fff;stroke-width:1.5px}.flowyChart .edgePath path{stroke:#333;stroke-width:1.5px}", ""]);

// exports


/***/ }),

/***/ "A57m":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4Qej");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("SZ7m").default
var update = add("407dd04a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "E1aB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_2_0_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("A57m");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_2_0_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_2_0_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_2_0_node_modules_css_loader_index_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlowy_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "FGiv":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


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

/***/ "I1BE":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "NOtv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("lv48");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = Object({"NODE_ENV":"production","BASE_URL":"/"}).DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("Q2Ig")))

/***/ }),

/***/ "Q2Ig":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("33yf");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "SZ7m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "lv48":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("FGiv");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-flowy.common.js.map