export default class GraphSvg {
  public node: SVGGraphicsElement
  constructor(el: string | SVGGraphicsElement) {
    if (el instanceof SVGGraphicsElement) {
      this.node = el
    } else {
      this.node = document.createElementNS('http://www.w3.org/2000/svg', el) as SVGGraphicsElement
    }
  }

  public append(el: string | GraphSvg): GraphSvg {
    if (!(el instanceof GraphSvg)) {
      el = new GraphSvg(el)
    }
    this.node.appendChild(el.node)
    return el
  }

  public attr(attribute: string, value: string) {
    this.node.setAttribute(attribute, value)
    return this
  }

  public select(selector: string) {
    const res = this.node.querySelector(selector)
    if (res instanceof SVGGraphicsElement) {
      return new GraphSvg(res)
    } else if (res) {
      throw new TypeError('The selected element is not of type "SVGGraphicsElement"')
    }

    return null
  }

  public selectAll(selector: string) {
    const res = this.node.querySelectorAll(selector)
    return Array.from(res).filter(
      node => node instanceof SVGGraphicsElement,
    ).map(
      node => new GraphSvg(node as SVGGraphicsElement,
    ))

    // return null
  }

  public text(s: string) {
    const el = document.createTextNode(s)
    this.node.appendChild(el)
    return this
  }

  public addClass(c: string) {
    this.node.classList.add(c)
    return this
  }
}
