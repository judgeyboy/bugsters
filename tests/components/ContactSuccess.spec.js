import { shallow } from 'vue-test-utils'

import ContactSuccess from '@/components/ContactSuccess'

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

  it('should emit "closeSuccess" when clicking "close" link', () => {
    const wrapper = shallow(ContactSuccess)
    const spy = jest.spyOn(wrapper.vm, '$emit')
    const closeLink = wrapper.find('a')
    closeLink.trigger('click')
    expect(spy).toHaveBeenCalledWith('closeSuccess')
  })

})
