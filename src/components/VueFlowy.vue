<template>
  <div 
    ref='vueflowyElement'
    class="flowyChart"/>
</template>

<script lang='ts'>
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import FlowChart from '../FlowChart'
import FlowElement from '@/FlowElement'

@Component
export default class VueFlowy extends Vue {
  public chartElement: HTMLElement | null | undefined
  @Prop() private chart!: FlowChart
  @Watch('chart.elements', {})
  @Watch('chart.elements')
  public onChartElementsChanged(val: FlowElement[], oldVal: FlowElement[]) {
    if (!this.chartElement) {
      return
    }
    this.chart.render(this.chartElement)
  }
  public mounted() {
    this.chartElement = this.$refs.vueflowyElement as HTMLElement
  }
}
</script>

<style lang="scss">
.flowyChart {
  svg {
    display: block;
    margin: 0 auto;
  }

  .node rect {
    stroke: #999;
    fill: #fff;
    stroke-width: 1.5px;
  }

  .edgePath path {
    stroke: #333;
    stroke-width: 1.5px;
  }
}
</style>
