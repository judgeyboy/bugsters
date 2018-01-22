import {shallow} from 'vue-test-utils'

import OrderDetails from '@/components/OrderDetails'

describe('OrderDetails component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(OrderDetails)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(OrderDetails)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
