import SectionScroll from '@/plugins/section-scroll'
import { shallow, createLocalVue } from 'vue-test-utils'

import ScrollMenuItem from '@/components/ScrollMenuItem'

const localVue = createLocalVue()

localVue.use(SectionScroll)

describe('ScrollMenuItem component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(ScrollMenuItem, {
      localVue
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(ScrollMenuItem, {
      localVue
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
