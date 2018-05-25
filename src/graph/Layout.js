import Graph from '../Graph';
import GraphNode from './Node';
import Edge from './Edge';

export default class Layout {
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
    this.position()
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
    this.graph.root = this.graph.setNode('_root', {dummy: 'root'})
    const depths = this.treeDepths()
    console.log('depths', depths)
    const height = Math.max(...Object.values(depths)) - 1
    const nodeSep = 2 * height + 1

    // multiply minLen by nodeSep to align nodes on non-border ranks
    this.graph.edges.forEach(edge => {
      edge.minLen *= nodeSep
    })

    // calculate a weight that is sufficient to keep subgraphs vertically compact
    const weight = this.graph.edges.reduce((prevVal, edge) => prevVal + edge.weight, 0)

    // create border nodes and link them up
    this.graph.getChildren().forEach(child => {
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

    function dfs(node, depth = 1) {
      const children = layout.graph.getChildren(node.id)
      if (children && children.length) {
        children.forEach(child => {
          dfs(child, depth + 1)
        })
      }
      depths[node.id] = depth
    }
    this.graph.getChildren().forEach(dfs)
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
  dfs(root, nodeSep, weight, height, depths, node) {
    const children = this.graph.getChildren(node.id)
    console.log('children of', node, children)
    if (!children.length) {
      if (node.id !== root.id) {
        this.graph.setEdge(root.id, node.id, {weight: 0, minLen: nodeSep})
      }
      return
    }

    console.log('not returning, patcher: code further!')
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
      const maxHeight = Math.max(layer.map(node => {
        return node.height
      }))
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
      console.log('visting node', node)
      if (visited[node.id]) {
        return node.rank
      }
      visited[node.id] = true
  
      const rank = Math.min(layout.graph.outEdges(node).map(outEdge => {
        return _longestPath(outEdge.to) - outEdge.minLen
      })) || 0
  
      return (node.rank = rank)
    }

    console.log('sources', this.graph.sources)
    this.graph.sources.forEach(_longestPath)
  }

  feasibleTree() {
    this.treeGraph = new Graph({directed: false})

    const start = this.graph.nodeIds[0]
    const size = this.graph.nodeIds.length
    this.treeGraph.setNode(start)
    console.log('size is', size)

    let edge
    let delta
    let doneTimes = 0
    while (this.tightTree() < size) {
      console.log('LOOP STARTS')
      edge = this.findMinSlackEdge()
      console.log('minslackedge is', edge)
      delta = this.treeGraph.hasNode(edge.from.id) ? this.slack(edge) : -this.slack(edge)
      this.shiftRanks(delta)
      doneTimes++
      if (doneTimes > 200) {
        throw new Error('too many loops, breaking now!')
        break
      }
    }
  }

  /**
   * Finds a maximal tree of tight edges and returns the number of nodes in the tree
   */
  tightTree() {
    const layout = this
    function dfs(node) {
      layout.graph.nodeEdges(node).forEach(edge => {
        console.log('CHECKING EDGE', edge)
        const to = (node.id === edge.from.id) ? edge.to : edge.from
        if (!layout.treeGraph.hasNode(to.id) && !layout.slack(edge)) {
          console.log('ADDING NODE TO TIGHTTREE')
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
      if (this.treeGraph.hasNode(edge.from.id) !== this.treeGraph.hasNode(edge.to.id)) {
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
    console.log('calculating slack of', edge.to.rank, edge.from.rank, edge.minLen, edge.to.rank - edge.from.rank)
    return edge.to.rank - edge.from.rank - edge.minLen
  }

  shiftRanks(delta) {
    this.treeGraph.nodes.forEach(node => {
      node.rank += delta
    })
  }
}