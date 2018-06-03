export default class GraphSvg {
  node: SVGGraphicsElement
  constructor(el: string | SVGGraphicsElement) {
    if (el instanceof SVGGraphicsElement) {
      this.node = el
    } else {
      this.node = <SVGGraphicsElement>document.createElementNS('http://www.w3.org/2000/svg', el)
    }
  }

  append(el: string | GraphSvg): GraphSvg {
    if (!(el instanceof GraphSvg)) {
      el = new GraphSvg(el)
    }
    this.node.appendChild(el.node)
    return el
  }

  attr(attribute: string, value: string) {
    this.node.setAttribute(attribute, value)
    return this
  }

  select(selector: string) {
    const res = this.node.querySelector(selector)
    if (res instanceof SVGGraphicsElement) {
      return new GraphSvg(res)
    } else if (res) {
      throw new TypeError('The selected element is not of type "SVGGraphicsElement"')
    }

    return null
  }

  selectAll(selector: string) {
    const res = this.node.querySelectorAll(selector)
    return Array.from(res).filter(node => node instanceof SVGGraphicsElement).map(node => new GraphSvg(<SVGGraphicsElement>node))

    // return null
  }

  text(s: string) {
    const el = document.createTextNode(s)
    this.node.appendChild(el)
    return this
  }

  addClass(c: string) {
    this.node.classList.add(c)
    return this
  }
}
