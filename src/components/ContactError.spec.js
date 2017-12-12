import { shallow } from 'vue-test-utils'

import ContactError from './ContactError'

describe('ContactError Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(ContactError)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(ContactError)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
