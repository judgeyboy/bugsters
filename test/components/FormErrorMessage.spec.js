import { shallow } from 'vue-test-utils'

import FormErrorMessage from '@/components/FormErrorMessage'

describe('FormErrorMessage Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(FormErrorMessage)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(FormErrorMessage)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should match snapshot with custom message', () => {
    const wrapper = shallow(FormErrorMessage,{
      propsData: {
        message: 'Custom error message'
      }
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

})
