import Graph from './Graph'
import Renderer from './Renderer'
import FlowElement, { FlowElementOptions } from './FlowElement'
import GraphSvg from './graph/Svg'

interface FlowChartOptions {
  test?: string
}

export default class FlowChart {
  public elements: FlowElement[] = []

  constructor(options: FlowChartOptions = {}) {
    localStorage.debug = 'graph,layout,normalizer,layering'
  }

  public addElement(id: string, options: FlowElementOptions) {
    const el = new FlowElement(id, options)
    this.elements.push(el)
    return el
  }

  public render(element: HTMLElement) {
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
      marginY: 20,
    })

    // first create all nodes
    for (const el of this.elements) {
      const node = graph.setNode(el.id, el.options)
      node.style.radius = {rx: 5, ry: 5}
    }

    // now create all edges
    for (const el of this.elements) {
      for (const edge of el.edges) {
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
