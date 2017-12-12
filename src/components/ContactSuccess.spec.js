import { shallow } from 'vue-test-utils'

import ContactSuccess from './ContactSuccess'

describe('ContactSuccess Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(ContactSuccess)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(ContactSuccess)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
