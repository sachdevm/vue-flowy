import Graph from "../../Graph";
import debug from 'debug'

const log = debug('layering')

export default class Layering {
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
      const min = 0
      const max = 0
      return max - min
    })
  }

  _horizontalCompaction(layering, align, reverseSep) {
    log('horizontalCompaction', layering, align, reverseSep)
    const xs = {}
    const blockGraph = Graph.buildBlockGraph(layering, align.root, reverseSep)

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
        console.log('VA node', node)
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