import VueRouter from 'vue-router'
import { shallow, mount, createLocalVue } from 'vue-test-utils'

import OrderTile from '@/components/OrderTile'

const localVue = createLocalVue()

localVue.use(VueRouter)

const $router = new VueRouter()

describe('OrderTile component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(OrderTile, {
      localVue,
      router: $router,
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
    const wrapper = mount(OrderTile, {
      localVue,
      router: $router,
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
