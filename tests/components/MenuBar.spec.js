import Vue from 'vue'
import VueRouter from 'vue-router'
import {shallow} from 'vue-test-utils'

import MenuBar from '@/components/MenuBar'

Vue.use(VueRouter)

describe('MenuBar component', () => {

  it('should be a vue instance', () => {
    const wrapper = shallow(MenuBar)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(MenuBar)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

})
