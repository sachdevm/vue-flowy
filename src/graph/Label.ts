import GraphSvg from './Svg'

interface LabelOptions {
  label: string
}

export default class GraphLabel {
  labelData: LabelOptions
  group: GraphSvg

  constructor(options: LabelOptions) {
    this.group = new GraphSvg('g')
    this.labelData = options

    this.textLabel()
  }

  textLabel() {
    const text = this.group.append('text').text(this.labelData.label)
  }
}
