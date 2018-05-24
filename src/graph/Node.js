const defaults = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: 'rect',
  width: 0,
  height: 0
}

export default class GraphNode {
  constructor(id, options) {
    /** @type {string} */
    this.id = id
    this.setOptions(options)
  }

  setOptions(options = {}) {
    if (!options.label) {
      options.label = this.id
    }

    Object.assign(this, defaults, options)
  }

  setDefaults() {

  }
}
