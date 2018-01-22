import {shallow} from 'vue-test-utils'

import Dashboard from '@/components/Dashboard'

describe('Dashboard component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(Dashboard)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(Dashboard)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
