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
})
