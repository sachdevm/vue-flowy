import Graph from '../Graph'
import GraphNode from './Node'
import Edge from './Edge'
import debug from 'debug'
import Position from './layout/Position';
import Layering from './layout/Layering';
import Normalizer from './layout/Normalizer';

const ldb = debug('layout')

export default class Layout {
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

    this.layering = new Layering(this.graph)
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
    this.treeGraph = new Graph({ directed: false })

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
