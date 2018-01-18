import Vue from 'vue'
import SectionScroll from '@/plugins/section-scroll'
import {shallow} from 'vue-test-utils'

import ScrollMenuItem from '@/components/ScrollMenuItem'

Vue.use(SectionScroll)

describe('ScrollMenuItem component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(ScrollMenuItem)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(ScrollMenuItem)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
