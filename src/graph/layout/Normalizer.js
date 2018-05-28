import Graph from "../../Graph";
import debug from 'debug'
import Edge from "../Edge";

const log = debug('normalizer')

export default class Normalizer {
  /**
   * 
   * @param {Graph} graph 
   */
  constructor(graph) {
    this.graph = graph
  }

  normalize() {
    this.graph.dummyChains = []
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

    log('not returning for', edge)

    for (let i = edge.from.rank; i < edge.to.rank; i++) {
      edge.points = []
      let dummy = this.graph.addDummyNode('edge', {rank: edge.from.rank}, '_d')
      this.graph.setEdge(edge.from.id, dummy, {weight: edge.weight}, name)
    }
  }
}