import VueFlowy from './VueFlowy.vue'
import { VueConstructor } from 'vue';
import FlowChart from './FlowChart'

const Plugin = {
  install (Vue: VueConstructor) {
    Vue.component(VueFlowy.name, VueFlowy)
  }
}

export default Plugin

export { FlowChart }
