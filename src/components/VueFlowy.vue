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

  @Prop() public chart!: FlowChart

  private renderChart: FlowChart | undefined

  public mounted() {
    this.renderChart = this.chart || new FlowChart()
    this.chartElement = this.$refs.vueflowyElement as HTMLElement
    this.chart.render(this.chartElement)
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
