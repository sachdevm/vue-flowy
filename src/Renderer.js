import Graph from './Graph'
import Shape from './graph/Shape'
import GraphSvg from './graph/Svg'
import GraphLabel from './graph/Label'

export default class Renderer {
  constructor(graph) {
    this.graph = graph
  }

  render(svg) {
    // TODO: remove all children of svg

    const edgePathsGroup = this.createOrSelectGroup(svg, 'edgePaths')
    const edgeLabels = this.createEdgeLabels(
      this.createOrSelectGroup(svg, 'edgeLabels'),
      this.graph
    )
    const nodes = this.createNodes(
      this.createOrSelectGroup(svg, 'nodes'),
      this.graph
    )

    // graph.layout()
  }

  /**
   *
   * @param {HTMLElement} selection
   * @param {Graph} graph
   */
  createNodes(selection, graph) {
    console.log('createNodes selection is', selection, 'graph is', graph)
    const simpleNodes = graph.nodeIds.filter(id => {
      return !graph.isSubgraph(id)
    })

    // we have to append all simpleNodes to the graph now
    graph.nodes.forEach(graphNode => {
      const nodeGroup = selection.append('g').addClass('node')

      console.log('adding node', graphNode)
      const labelGroup = nodeGroup.append('g').addClass('label')
      const label = labelGroup.append(
        new GraphLabel({ label: graphNode.label }).group
      )
      const labelBBox = label.node.getBBox()
      console.log('label', label, 'labelGroup', labelGroup)
      
      // nodeGroup.node.style.opacity = 0

      const shape = nodeGroup.append(
        new Shape(graphNode.shape, labelBBox, graphNode).shape
      )
      nodeGroup.append(labelGroup)
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

  /**
   *
   * @param {GraphSvg} root
   * @param {string} name
   */
  createOrSelectGroup(root, name) {
    return root.select('g.' + name) || root.append('g').addClass(name)
  }
}
