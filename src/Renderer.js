import shapes from 'dagre-d3-renderer/lib/shapes'

export default class Renderer {

  constructor() {
    // this.shapes = 
  }

  render(svg, g) {
    console.log(svg)
    const outputGroup = this.createOrSelectGroup(svg, 'output')
    const edgePathsGroup = this.createOrSelectGroup(outputGroup, 'edgePaths')
    const edgeLabels = this.createEdgeLabels(this.createOrSelectGroup(outputGroup, 'edgeLabels'), g)
    const nodes = this.createNodes(this.createOrSelectGroup(outputGroup, 'nodes'), g)
  }

  createNodes(selection, g) {
    const simpleNodes = g.nodes().filter(function(v) {return !util.isSubgraph(g, v)})
    let svgNodes = selection.selectAll('g.node')

    for (const node of nodes) {
      const shape = shapes[node.shape]
    }
  }

  createOrSelectGroup(root, name) {
    let selection = root.querySelector('g.' + name)
    if (!selection) {
      selection = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      selection.classList.add(name)
      root.appendChild(selection)
    }
    return selection
  }
}