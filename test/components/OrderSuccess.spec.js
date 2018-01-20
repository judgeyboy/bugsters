import SectionScroll from '@/plugins/section-scroll'
import { shallow, createLocalVue } from 'vue-test-utils'

import OrderSuccess from '@/components/OrderSuccess'

const localVue = createLocalVue()

localVue.use(SectionScroll)

describe('OrderSuccess Component', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallow(OrderSuccess, {
      localVue
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(OrderSuccess, {
      localVue,
      propsData: {
        orderId: 'ieigkeke'
      }
    })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should emit "closeSuccess" when clicking "close" link', () => {
    const wrapper = shallow(OrderSuccess, {
      localVue
    })
    const spy = jest.spyOn(wrapper.vm, '$emit')
    const closeLink = wrapper.find('.empty-action a')
    closeLink.trigger('click')
    expect(spy).toHaveBeenCalledWith('closeSuccess')
  })
})
