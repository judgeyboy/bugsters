import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { shallow } from 'vue-test-utils'
import SectionScroll from '@/plugins/section-scroll'

import HeaderSection from '@/components/HeaderSection'

Vue.use(SectionScroll)

Vue.use(VueI18n)
const i18n = new VueI18n()

jest.mock('@/assets/cute-bug.png', () => 'bugsters-logo.png')

describe('HeaderSection Component', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallow(HeaderSection, { i18n })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(HeaderSection, { i18n })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
