import { shallow } from 'vue-test-utils'

import OrderSection from './OrderSection'

describe('OrderSection Container', () => {

  it('should be a vue instance', () => {
    const wrapper = shallow(OrderSection)
    expect(wrapper.isVueInstance()).toBe(true)
  })

})
