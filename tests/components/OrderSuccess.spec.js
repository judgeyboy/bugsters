import Vue from 'vue'
import SectionScroll from '@/plugins/section-scroll'
import { shallow } from 'vue-test-utils'

import OrderSuccess from '@/components/OrderSuccess'

Vue.use(SectionScroll)

describe('OrderSuccess Component', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(OrderSuccess)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(OrderSuccess, {
      propsData: {
        orderId: 'ieigkeke'
      }
    })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should emit "closeSuccess" when clicking "close" link', () => {
    const wrapper = shallow(OrderSuccess)
    const spy = jest.spyOn(wrapper.vm, '$emit')
    const closeLink = wrapper.find('.empty-action a')
    closeLink.trigger('click')
    expect(spy).toHaveBeenCalledWith('closeSuccess')
  })

})
