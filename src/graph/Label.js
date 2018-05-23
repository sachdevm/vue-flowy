import GraphSvg from "./Svg";

export default class GraphLabel {
  constructor(labelData) {
    this.group = new GraphSvg('g')
    this.labelData = labelData

    this.textLabel()
  }

  textLabel() {
    const text = this.group.append('text').text(this.labelData.label)
  }
}