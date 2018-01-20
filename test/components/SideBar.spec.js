import { shallow } from 'vue-test-utils'

import SideBar from '@/components/SideBar'

describe('SideBar component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(SideBar)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(SideBar)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
