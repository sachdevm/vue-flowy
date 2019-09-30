import { FlowElement } from './FlowElement';
export interface FlowChartElementOptions {
    label?: string;
    shape?: string;
    class?: string;
}
export interface FlowChartOptions {
    direction: 'LR' | 'TB' | 'BT' | 'RL';
}
export declare class FlowChart {
    options: FlowChartOptions;
    elements: FlowElement[];
    constructor(options?: FlowChartOptions);
    addElement(id: string, options?: FlowChartElementOptions): FlowElement;
    destroy(): void;
    render(element: HTMLElement): void;
}
