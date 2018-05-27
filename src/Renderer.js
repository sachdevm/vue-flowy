import Graph from './Graph'
import Shape from './graph/Shape'
import GraphSvg from './graph/Svg'
import GraphLabel from './graph/Label'

export default class Renderer {
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
        new GraphLabel({ label: graphNode.label }).group
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
        new Shape(graphNode.shape, labelBBox, graphNode).shape
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
        new GraphLabel({ label: edge.label }).group
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
