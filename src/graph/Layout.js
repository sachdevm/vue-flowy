import Graph from '../Graph';

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
    // this.makeSpaceForEdgeLabels()
    this.position()
  }

  makeSpaceForEdgeLabels() {
    this.graph.rankSep /= 2
    this.graph.edges.forEach((edge) => {
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

  position() {
    this.positionY()
  }

  positionY() {
    const layering = this.buildLayerMatrix()
  }

  buildLayerMatrix() {
    const max = Math.max(...this.graph.nodes.map((node) => {
      const rank = node.rank
      if (rank) {
        return rank
      }
    }))
    console.log('max', max)
    // const layering = 
  }
}