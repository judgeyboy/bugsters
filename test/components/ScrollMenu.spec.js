import Vue from 'vue'
import SectionScroll from '@/plugins/section-scroll'
import {shallow} from 'vue-test-utils'

import ScrollMenu from '@/components/ScrollMenu'

Vue.use(SectionScroll)

describe('ScrollMenu component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(ScrollMenu)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(ScrollMenu)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
