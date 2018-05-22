// import {} from "d3"
// import {Graph} from "graphlibrary"
// import dagreD3 from "dagre-d3-renderer"
import Graph from './Graph'
import Renderer from './Renderer'
import FlowElement from './FlowElement'

export default class FlowChart {
  constructor(options) {
    this.elements = []
  }

  addElement(id, options) {
    const el = new FlowElement(id, options)
    this.elements.push(el)
    return el
  }

  render(element) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('id', 'f' + element.id)
    element.appendChild(svg)
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    svg.appendChild(group)

    // d3
    //   .select(element)
    //   .append("svg")
    //   .attr("id", )
    //   .attr("xmlns", "http://www.w3.org/2000/svg")

    // Create the input mermaid.graph
    const g = new Graph({
      multiGraph: true,
      compound: true
    })

    g.setGraph({
      rankdir: 'LR',
      marginx: 20,
      marginy: 20
    })

    // first create all nodes
    for (const i in this.elements) {
      const el = this.elements[i]
      const elData = {}

      elData.label = el.id

      if (el.options && el.options.label) {
        elData.label = el.options.label
      }
      g.setNode(el.id, elData)
    }

    // now apply some styles to all nodes
    for (const node of g.nodes) {
      node.rx = node.ry = 5
    }

    // now create all edges
    for (const i in this.elements) {
      const el = this.elements[i]
      for (const k in el.edges) {
        const edge = el.edges[k]
        const edgeData = {}

        if (edge.options && edge.options.label) {
          edgeData.label = edge.options.label
        }

        g.setEdge(el.id, edge.otherId, edgeData)
      }
    }

    const renderer = new Renderer() // eslint-disable-line new-cap

    const e = svg.querySelector('g')
    renderer.render(e, g)
    const svgElement = document.getElementById('f' + element.id)
    const groupElement = svgElement.querySelector('g')
    svgElement.style.width = groupElement.getBoundingClientRect().width + 40
    svgElement.style.height = groupElement.getBoundingClientRect().height + 40
  }
}
