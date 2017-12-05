import { shallow } from 'vue-test-utils'

import OrderSuccess from './OrderSuccess'

describe('OrderSuccess Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(OrderSuccess)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
