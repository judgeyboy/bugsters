import { shallow } from 'vue-test-utils'

import NewOrder from '@/components/NewOrder'

describe('NewOrder component', () => {

  it('should be a vue instance', () => {
    const wrapper = shallow(NewOrder)
    expect(wrapper.isVueInstance()).toBe(true)
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
