import {shallow} from '@vue/test-utils'
import Vue from 'vue'
import {VueFlowy} from '@/vue-flowy'

describe('VueFlowy.vue', () => {
  it('renders an empty div container for the chart', () => {
    const wrapper = shallow(VueFlowy, {
      propsData: {chart: null}
    })
    expect(wrapper.findAll('.flowyChart'))
  })
})