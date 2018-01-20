import {shallow} from 'vue-test-utils'

import OrderTile from '@/components/OrderTile'

describe('OrderTile component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(OrderTile, {
      propsData: {
        order: {
          id: 'kejkelge',
          state: 'in progress'
        }
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(OrderTile, {
      propsData: {
        order: {
          id: 'kejkelge',
          state: 'in progress'
        }
      }
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
