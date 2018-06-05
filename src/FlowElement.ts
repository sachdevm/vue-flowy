import { EdgeOptions } from '@/graph/Edge'
import Style from '@/graph/layout/Style'

export interface FlowElementOptions {
  style?: Style
}

export default class FlowElement {
  public id: string
  public options: FlowElementOptions
  public edges: any[] = []

  constructor(id: string, options: FlowElementOptions) {
    this.id = id
    this.options = options
  }

  public leadsTo(destinationElement: FlowElement, options: EdgeOptions) {
    this.edges.push({ otherId: destinationElement.id, options })
    return destinationElement
  }
}
