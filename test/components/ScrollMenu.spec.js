import SectionScroll from '@/plugins/section-scroll'
import { shallow, createLocalVue } from 'vue-test-utils'

import ScrollMenu from '@/components/ScrollMenu'

const localVue = createLocalVue()

localVue.use(SectionScroll)

describe('ScrollMenu component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(ScrollMenu, {
      localVue
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(ScrollMenu, {
      localVue
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
