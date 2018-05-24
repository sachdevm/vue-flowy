const defaults = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: 'rect'
}

export default class GraphNode {
  constructor(id, options) {
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
