import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import SectionScroll from '@/plugins/section-scroll'

import HeaderSection from './HeaderSection'

Vue.use(SectionScroll)

jest.mock('@/assets/cute-bug.png', () => 'bugsters-logo.png')

describe('HeaderSection Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(HeaderSection)
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(HeaderSection)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

})
