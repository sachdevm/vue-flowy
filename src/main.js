import VueFlowy from './VueFlowy.vue';
import FlowChart from './FlowChart';
const Plugin = {
    VueFlowy,
    FlowChart,
    install(Vue) {
        Vue.component(VueFlowy.name, VueFlowy);
    }
};
export default Plugin;
export { VueFlowy, FlowChart };
//# sourceMappingURL=main.js.map