import { shallow } from 'vue-test-utils'

import ContactError from '@/components/ContactError'

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

  it('should emit "closeError" when clicking "try again" link', () => {
    const wrapper = shallow(ContactError)
    const spy = jest.spyOn(wrapper.vm, '$emit')
    const closeLink = wrapper.find('a')
    closeLink.trigger('click')
    expect(spy).toHaveBeenCalledWith('closeError')
  })

})
