import Graph from '../Graph'
import GraphNode from './Node'
import Edge from './Edge'
import debug from 'debug'

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
    this.treeGraph = new Graph({ directed: false })

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
