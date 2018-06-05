import Graph, { GraphNodeList, EdgeArray } from '../Graph'
import GraphNode from './Node'
import Edge from './Edge'
import debug from 'debug'
import Position from './layout/Position'
import Layering, { XPositionList } from './layout/Layering'
import Normalizer from './layout/Normalizer'

const ldb = debug('layout')

export default class Layout {
  public graph: Graph
  public treeGraph: Graph | undefined
  public layering: Layering
  public normalizer: Normalizer

  constructor(graph: Graph) {
    this.graph = graph
    this.normalizer = new Normalizer(this.graph)
    ldb('creating layering once')
    this.layering = new Layering(this.graph)
    this.runLayout()
  }

  public runLayout() {
    this.makeSpaceForEdgeLabels()
    this.createNestingGraph()
    this.rank()
    this.cleanupNestingGraph()
    this.normalizeRanks()
    this.assignRankMinMax()

    this.normalizer.normalize()

    this.order()
    this.adjustCoordinateSystem()

    this.layering.calculatePositions()
    this.undoCoordinateSystem()
    this.translateGraph()
  }

  public makeSpaceForEdgeLabels() {
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

  public createNestingGraph() {
    ldb('creating nesting graph')
    this.graph.rootNode = this.graph.setNode('_root', { dummy: 'root' })
    const depths = this.treeDepths()
    ldb('depths', depths)
    const height = Math.max(...Object.values(depths)) - 1
    this.graph.nodeRankFactor = 2 * height + 1

    // multiply minLen by nodeSep to align nodes on non-border ranks
    this.graph.edges.forEach(edge => {
      edge.minLen *= this.graph.nodeRankFactor
    })

    // calculate a weight that is sufficient to keep subgraphs vertically compact
    const weight = this.graph.edges.reduce(
      (prevVal, edge) => prevVal + edge.weight,
      0,
    )

    // create border nodes and link them up
    this.graph.getChildren().forEach(child => {
      ldb(
        'calling dfs with',
        this.graph.rootNode,
        this.graph.nodeRankFactor,
        weight,
        height,
        depths,
        child,
      )
      this.dfs(this.graph.rootNode as GraphNode, weight, height, depths, child)
    })

    ldb('edges after nesting graph', this.graph.edges.length)
  }

  public cleanupNestingGraph() {
    if (this.graph.rootNode) {
      this.graph.removeNode(this.graph.rootNode.id)
    }

    delete this.graph.rootNode
    this.graph.edges.forEach(edge => {
      if (edge.nestingEdge) {
        this.graph.removeEdge(edge.id)
      }
    })
    ldb(
      'edges after cleanup nesting graph',
      this.graph.edges.length,
      this.graph.edges,
    )
  }

  public normalizeRanks() {
    const minRank = this.minRank()
    this.graph.nodes.forEach(node => (node.rank -= minRank))
  }

  public assignRankMinMax() {
    let maxRank = 0
    this.graph.nodes.forEach(node => {
      if (!node.borders.top || !node.borders.bottom) {
        return
      }
      node.minRank = node.borders.top.rank
      node.maxRank = node.borders.bottom.rank
      maxRank = Math.max(maxRank, node.maxRank)
    })
    this.graph.maxRank = maxRank
  }

  public treeDepths() {
    const depths: {[nodeId: string]: number} = {}
    const layout = this

    function dfs(node: GraphNode, depth = 1) {
      const children = Object.values(node.children)
      ldb('children of', node, 'are', children, '. depth:', depth)
      children.forEach(child => {
        ldb('child', child)
        dfs(child, depth + 1)
      })
      depths[node.id] = depth
    }
    this.graph.getChildren().forEach(child => {
      dfs(child)
    })
    return depths
  }

  public dfs(rootNode: GraphNode, weight: number, height: number, depths: {[nodeId: string]: number}, node: GraphNode) {
    const children = Object.values(node.children)
    ldb('DFS:', children.length, 'children of', node, children)
    if (!children.length) {
      if (node.id !== rootNode.id) {
        this.graph.setEdge(rootNode.id, node.id, { weight: 0, minLen: this.graph.nodeRankFactor })
      }
      ldb('returning!')
      return
    }
    ldb('not returning')
    const top = this.addBorderNode('_bt')
    const bottom = this.addBorderNode('_bb')

    node.borders = {top, bottom}

    this.graph.setParent(top.id, node.id)
    this.graph.setParent(bottom.id, node.id)

    children.forEach(child => {
      this.dfs(rootNode, weight, height, depths, child)

      const childTop = child.borders.top ? child.borders.top : child
      const childBottom = child.borders.bottom ? child.borders.bottom : child
      const thisWeight = Object.keys(child.borders).length ? weight : 2 * weight
      const minLen = childTop !== childBottom ? 1 : height - depths[node.id] + 1

      this.graph.setEdge(top.id, childTop.id, {
        weight: thisWeight,
        minLen,
        nestingEdge: true,
      })

      this.graph.setEdge(childBottom.id, bottom.id, {
        weight: thisWeight,
        minLen,
        nestingEdge: true,
      })
    })

    if (!this.graph.getParent(node.id)) {
      this.graph.setEdge(rootNode.id, top.id, {
        weight: 0,
        minLen: height + depths[node.id],
      })
    }
  }

  public addBorderNode(prefix: string, rank?: number, order?: number) {
    const node: {width: number, height: number, rank?: number, order?: number} = {
      width: 0,
      height: 0,
    }
    if (rank && order) {
      node.rank = rank
      node.order = order
    }
    return this.graph.addDummyNode('border', node, prefix)
  }

  public rank() {
    switch (this.graph.ranker) {
      case 'network-simplex':
        this.networkSimplexRanker()
        break
      case 'tight-tree':
        // this.tightTreeRanker()
        break
      case 'longest-path':
        // this.longestPathRanker()
        break
      default:
        this.networkSimplexRanker()
        break
    }
  }

  public position() {
    // const position = new Position(graph)
    this.positionY()
    // this.positionX()
  }

  public positionX() {
    ldb('creating matrix in positionX')
    const matrix = this.layering.buildLayerMatrix()

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

  public positionY() {
    let prevY = 0
    this.layering.matrix.forEach(layer => {
      const maxHeight = Math.max(
        ...layer.map(node => node.size.height),
      )
      layer.forEach(node => {
        ldb('assigning y', node.id, prevY, maxHeight / 2, prevY + maxHeight / 2)
        node.position.y = prevY + maxHeight / 2
      })
      prevY += maxHeight + this.graph.rankSep
    })
  }

  public balance(xPositions: XPositionList) {
    for (const nodeId in xPositions.ul) {
      if (xPositions.ul.hasOwnProperty(nodeId)) {
        const mappedXs = Object.values(Object.values(xPositions)).map(xs => xs[nodeId]).sort()
        xPositions.ul[nodeId] = mappedXs[1] + mappedXs[2] / 2
      }
    }
    return xPositions
  }

  public networkSimplexRanker() {
    this.longestPath()
    this.feasibleTree()
  }

  public longestPath() {
    const layout = this
    const visited: {[nodeId: string]: boolean} = {}

    function _longestPath(node: GraphNode) {
      if (visited[node.id]) {
        return node.rank
      }
      visited[node.id] = true

      const min = Math.min(
        ...layout.graph.outEdges(node).map(outEdge => {
          return _longestPath(outEdge.to) - outEdge.minLen
        }),
      )
      const rank = min === Infinity ? 0 : min

      return (node.rank = rank)
    }

    this.graph.sources.forEach(_longestPath)
  }

  public feasibleTree() {
    this.treeGraph = new Graph({ directed: false })

    const start = this.graph.nodeIds[0]
    const size = this.graph.nodeIds.length
    this.treeGraph.setNode(start)
    ldb('start is', start, 'size is', size)

    let edge: Edge | null
    let delta: number
    let doneTimes = 0
    while (this.tightTree() < size) {
      edge = this.findMinSlackEdge()

      if (edge === null) {
        throw new Error('min slack edge is null!')
      }

      delta = this.treeGraph.hasNode((edge as Edge).from.id)
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
  public tightTree() {
    const layout = this
    const treeGraph = this.treeGraph as Graph
    function dfs(node: GraphNode) {
      ldb('nodeEdges', layout.graph.nodeEdges(node))
      layout.graph.nodeEdges(node).forEach(edge => {
        ldb('nodeEdge for', node.id, edge)
        const to = node.id === edge.from.id ? edge.to : edge.from
        ldb(
          'not hasNode',
          !treeGraph.hasNode(to.id),
          'not slack',
          !layout.slack(edge),
        )
        if (!treeGraph.hasNode(to.id) && !layout.slack(edge)) {
          ldb('adding node to tighttree', to)
          treeGraph.setNode(to.id)
          treeGraph.setEdge(node.id, to.id)
          dfs(to)
        }
      })
    }

    treeGraph.nodes.forEach(dfs)
    ldb('tightTree size is', treeGraph.nodeIds.length)
    return treeGraph.nodeIds.length
  }

  public findMinSlackEdge() {
    let minSlackEdge: Edge | null = null
    let minSlack = Infinity

    ldb('finding min slack edge')

    this.graph.edges.forEach(edge => {
      if (
        (this.treeGraph as Graph).hasNode(edge.from.id) !==
        (this.treeGraph as Graph).hasNode(edge.to.id)
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

  public slack(edge: Edge) {
    ldb('calculating slack of', edge, edge.to.rank, edge.from.rank, edge.minLen)
    return edge.to.rank - edge.from.rank - edge.minLen
  }

  public order() {
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


  public buildLayerGraph(rank: number, relationship: 'in' | 'out') {
    const graph = new Graph({compound: true})
    graph.rootNode = graph.setNode('_root', { dummy: 'root' })

    this.graph.nodes.forEach(node => {
      const parent = node.parent

      if (!node.minRank || !node.maxRank) {
        throw new Error('minRank or maxRank not defined!')
      }

      if (node.rank === rank || (node.minRank <= rank && rank <= node.maxRank)) {
        const newNode = graph.setNode(node.id)
        graph.setParent(node.id, parent ? parent.id : graph.rootNode ? graph.rootNode.id : '')
        let edges: EdgeArray = []
        if (relationship === 'in') {
          edges = this.graph.inEdges(node)
        } else if (relationship === 'out') {
          edges = this.graph.outEdges(node)
        }

        edges.forEach(edge => {
          const to = edge.from.id === node.id ? edge.to : edge.from
          const newEdge = graph.getEdge(to.id, node.id)
          const weight = edge ? newEdge.weight : 0
          graph.setEdge(to.id, node.id, {weight: edge.weight + weight})
        })

        if (node.minRank && node.borders.left && node.borders.right) {
          graph.setNode(node.id, {borders: {
            left: {[rank]: node.borders.left[rank]},
            right: {[rank]: node.borders.right[rank]},
          }})
        }
      }

    })

  }

  public buildLayerGraphs(ranks: number[], relationship: 'in' | 'out') {
    return ranks.map(rank => this.buildLayerGraph(rank, relationship))
  }

  public initOrder() {
    const layout = this
    const visited: {[nodeId: string]: boolean} = {}
    const simpleNodes = this.graph.nodes.filter(
      node => !this.graph.getChildren(node.id).length,
    )
    const maxRank = this.maxRank(simpleNodes)
    const layers: GraphNode[][] = []

    function dfs(node: GraphNode) {
      if (visited[node.id]) {
        return
      }
      visited[node.id] = true
      if (!layers[node.rank]) {
        layers[node.rank] = []
      }
      layers[node.rank].push(node)
      layout.graph.getSuccessors(node).forEach(nodeId => {
        dfs(layout.graph.getNode(nodeId))
      })
    }

    function compare(a: GraphNode, b: GraphNode) {
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

  public assignOrder(layering: GraphNode[][]) {
    layering.forEach(layer => {
      layer.forEach((node, index) => {
        node.order = index
      })
    })
  }

  public adjustCoordinateSystem() {
    if (this.graph.rankDir === 'lr' || this.graph.rankDir === 'rl') {
      this.swapWidthHeight()
    }
  }

  public undoCoordinateSystem() {
    if (this.graph.rankDir === 'bt' || this.graph.rankDir === 'rl') {
      // this.reverseY()
    }

    if (this.graph.rankDir === 'lr' || this.graph.rankDir === 'rl') {
      this.swapXY()
      this.swapWidthHeight()
    }
  }

  public _swapWidthHeightOne(o: GraphNode | Edge) {
    const w = o.size.width
    o.size.width = o.size.height
    o.size.height = w
  }

  public swapWidthHeight() {
    this.graph.nodes.forEach(this._swapWidthHeightOne)
    this.graph.edges.forEach(this._swapWidthHeightOne)
  }

  public _swapXYOne(o: GraphNode | Edge) {
    const x = o.position.x
    o.position.x = o.position.y
    ldb('y before', o.position.y, 'after', x)
    o.position.y = x
    ldb('now', { x: o.position.x, y: o.position.y })
  }

  public swapXY() {
    this.graph.nodes.forEach(this._swapXYOne)
    this.graph.edges.forEach(edge => {
      edge.points.forEach(this._swapXYOne)
      if (edge.position.x) {
        this._swapXYOne(edge)
      }
    })
  }

  public maxRank(nodes = this.graph.nodes) {
    return nodes.reduce((prevV, node) => {
      return node.rank > prevV ? node.rank : prevV
    }, -Infinity)
  }

  public minRank(nodes = this.graph.nodes) {
    return nodes.reduce((prevV, node) => {
      return node.rank < prevV ? node.rank : prevV
    }, Infinity)
  }

  public shiftRanks(delta: number) {
    if (!this.treeGraph) {
      throw new Error('treeGraph is not defined!')
    }

    this.treeGraph.nodes.forEach(node => {
      node.rank += delta
    })
  }

  public translateGraph() {
    let minX = Infinity
    let maxX = 0
    let minY = Infinity
    let maxY = 0
    const marginX = this.graph.marginX || 0
    const marginY = this.graph.marginY || 0

    function getExtremes(o: GraphNode | Edge) {
      const x = o.position.x || 0
      const y = o.position.y || 0
      const w = o.size.width || 0
      const h = o.size.height || 0
      minX = Math.min(minX, x - w / 2)
      maxX = Math.max(maxX, x + w / 2)
      minY = Math.min(minY, y - h / 2)
      maxY = Math.max(maxY, y + h / 2)
    }

    this.graph.nodes.forEach(getExtremes)

    this.graph.edges.forEach(edge => {
      if (edge.position.x) {
        getExtremes(edge)
      }
    })

    minX -= marginX
    minY -= marginY

    this.graph.nodes.forEach(node => {
      node.position.x -= minX
      node.position.y -= minY
    })

    this.graph.edges.forEach(edge => {
      edge.points.forEach(point => {
        point.position.x -= minX
        point.position.y -= minY
      })

      if (edge.position.x) {
        edge.position.x -= minX
      }

      if (edge.position.y) {
        edge.position.y -= minY
      }
    })

    this.graph.size.width = maxX - minX + marginX
    this.graph.size.height = maxY - minY + marginY
  }

  /**
   *
   * @param {[{}]} arr
   * @param {string} key
   */
  public sortBy(arr: Array<{[key: string]: any}>, key: string) {
    function compare(a: {[key: string]: any}, b: {[key: string]: any}) {
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

  public sortByFunction(arr: any[], fn: (v: any) => any) {
    function compare(a: string | number, b: string | number) {
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
