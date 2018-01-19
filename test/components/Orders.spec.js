import {shallow} from 'vue-test-utils'

import Orders from '@/components/Orders'

describe('Orders component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(Orders)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(Orders)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
