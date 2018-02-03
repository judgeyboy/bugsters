import { shallow } from 'vue-test-utils'

import NewOrder from '@/components/NewOrder'

describe('NewOrder component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(NewOrder)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
