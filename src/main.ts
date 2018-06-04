import VueFlowy from './components/VueFlowy.vue'
import { VueConstructor } from 'vue';
import FlowChart from './FlowChart'

const Plugin = {
  VueFlowy,
  FlowChart,
  install (Vue: VueConstructor) {
    Vue.component(VueFlowy.name, VueFlowy)
  }
}

export default Plugin

export { VueFlowy, FlowChart }
