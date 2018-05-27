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

    this.positionNodes()
  }

  /**
   *
   * @param {GraphSvg} selection
   * @param {Graph} graph
   */
  createNodes(selection) {
    console.log('createNodes selection is', selection, 'graph is', this.graph)
    const simpleNodes = this.graph.nodeIds.filter(id => {
      return !this.graph.isSubgraph(id)
    })

    // we have to append all simpleNodes to the graph now
    this.graph.nodes.forEach(graphNode => {
      const nodeGroup = selection.append('g').addClass('node')

      console.log('adding node', graphNode)
      const labelGroup = nodeGroup.append('g').addClass('label')
      const label = labelGroup.append(
        new GraphLabel({ label: graphNode.label }).group
      )
      const labelBBox = label.node.getBBox()
      console.log('label', label, 'labelGroup', labelGroup)

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
    console.log(svgEdgeLabels)
    svgEdgeLabels.forEach(n => {
      const groupElement = SvgGenerator.create('g')
      groupElement.classList.add('edgeLabel')
      // groupElement.style.opacity = 0
      n.classList.add('update')
      n.appendChild(groupElement)
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
