import VueRouter from 'vue-router'
import { shallow, createLocalVue } from 'vue-test-utils'

import NewOrder from '@/components/NewOrder'

const localVue = createLocalVue()

localVue.use(VueRouter)

const $router = new VueRouter()

describe('NewOrder component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(NewOrder)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should navigate back when back linked clicked', () => {
    const wrapper = shallow(NewOrder, {
      localVue,
      router: $router
    })
    const spy = jest.spyOn(wrapper.vm.$router, 'back')

    wrapper.vm.goBack()

    expect(spy).toHaveBeenCalled()
  })

  /*
    Skipping this test for now -
    Don't like how it's done - it doesn't feel right
  */
  it.skip('should match snapshot', () => {
    const wrapper = mount(NewOrder, {
      localVue,
      router: $router,
      provide: {
        $validator: new Validator()
      },
      store
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
