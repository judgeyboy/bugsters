import Vue from 'vue'
import VueRouter from 'vue-router'
import {shallow} from 'vue-test-utils'

import NoOrders from '@/components/NoOrders'

Vue.use(VueRouter)

describe('SideBar component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(NoOrders)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(NoOrders)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
