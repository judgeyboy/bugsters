import Vue from 'vue'
import VueRouter from 'vue-router'
import {shallow} from 'vue-test-utils'
import SideBar from './SideBar'

Vue.use(VueRouter)

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
