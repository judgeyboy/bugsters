import Vue from 'vue'
import VueRouter from 'vue-router'
import SectionScroll from '@/plugins/section-scroll'
import {shallow} from 'vue-test-utils'

import SideBar from '@/components/SideBar'

Vue.use(VueRouter)
Vue.use(SectionScroll)

describe('SideBar component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(SideBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(SideBar)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
