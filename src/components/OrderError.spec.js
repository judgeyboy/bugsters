import { shallow } from 'vue-test-utils'

import OrderError from './OrderError'

describe('OrderError Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(OrderError)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(OrderError)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should emit "closeError" when clicking "try again" link', () => {
    const wrapper = shallow(OrderError)
    const spy = jest.spyOn(wrapper.vm, '$emit')
    const closeLink = wrapper.find('a')
    closeLink.trigger('click')
    expect(spy).toHaveBeenCalledWith('closeError')
  })

})
