export default class GraphSvg {

  constructor(tag) {
    /**
     * @type {HTMLElement}
     */
    this.node = document.createElementNS('http://www.w3.org/2000/svg', tag)
  }

  /**
   * 
   * @param {string|GraphSvg} tag 
   * @returns {GraphSvg}
   */
  append(el) {
    if (!(el instanceof GraphSvg)) {
      console.log('creating element out of', el)
      el = new GraphSvg(el)
    }
    this.node.appendChild(el.node)
    return el
  }

  attr(attribute, value) {
    this.node.setAttribute(attribute, value)
    return this
  }

  select(selector) {
    const res = this.node.querySelector(selector)
    if (res) {
      return new GraphSvg(res)
    }

    return null
  }

  selectAll(selector) {
    const res = this.node.querySelectorAll(selector)
    if (res) {
      return Array.from(res).map((node) => new GraphSvg(node))
    }

    return null
  }

  text(s) {
    const el = document.createTextNode(s)
    this.node.appendChild(el)
    return this
  }

  /**
   * 
   * @param {string} c 
   */
  addClass(c) {
    this.node.classList.add(c)
    return this
  }
}