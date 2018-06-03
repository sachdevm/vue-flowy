import Graph from './Graph'
import Renderer from './Renderer'
import FlowElement, { FlowElementOptions } from './FlowElement'
import GraphSvg from './graph/Svg'

interface FlowChartOptions {

}

export default class FlowChart {
  elements: FlowElement[] = []

  constructor(options: FlowChartOptions = {}) {
    localStorage.debug = 'layout,normalizer,layering'
  }

  addElement(id: string, options: FlowElementOptions) {
    const el = new FlowElement(id, options)
    this.elements.push(el)
    return el
  }

  render(element: HTMLElement) {
    const svg = new GraphSvg('svg')
    svg.node.id = 'f' + element.id
    element.appendChild(svg.node)
    const group = svg.append('g')

    // Create the input graph
    const graph = new Graph({
      multiGraph: true,
      compound: true,
      rankDir: 'LR',
      marginX: 20,
      marginY: 20
    })

    // first create all nodes
    for (const i in this.elements) {
      const el = this.elements[i]
      graph.setNode(el.id, el.options)
    }

    // now apply some styles to all nodes
    for (const node of graph.nodes) {
      node.style.radius = {rx: 5, ry: 5}
    }

    // now create all edges
    for (const i in this.elements) {
      const el = this.elements[i]
      for (const k in el.edges) {
        const edge = el.edges[k]

        graph.setEdge(el.id, edge.otherId, edge.options)
      }
    }

    const renderer = new Renderer(graph)

    renderer.render(group)

    // const svgElement = document.getElementById('f' + element.id)
    // const groupElement = svgElement.querySelector('g')
    // svgElement.style.width = groupElement.getBoundingClientRect().width + 40
    // svgElement.style.height = groupElement.getBoundingClientRect().height + 40
  }
}
