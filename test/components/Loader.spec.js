import {shallow} from 'vue-test-utils'

import Loader from '@/components/Loader'

describe('Loader component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(Loader)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(Loader)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
