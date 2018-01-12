import { shallow } from 'vue-test-utils'

import FooterSection from './FooterSection'

describe('FooterSection Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(FooterSection)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(FooterSection)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

})
