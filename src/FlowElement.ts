import { EdgeOptions } from '@/graph/Edge';

export interface FlowElementOptions {
  
}

export default class FlowElement {
  id: string
  options: FlowElementOptions
  edges: any[] = []

  constructor(id: string, options: FlowElementOptions) {
    this.id = id
    this.options = options
  }

  leadsTo(destinationElement: FlowElement, options: EdgeOptions) {
    this.edges.push({ otherId: destinationElement.id, options })
    return destinationElement
  }
}
