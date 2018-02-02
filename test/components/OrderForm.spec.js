import VueRouter from 'vue-router'
import VeeValidate, { Validator } from 'vee-validate'
import { shallow, createLocalVue, mount } from 'vue-test-utils'

import OrderForm from '@/components/OrderForm'

const localVue = createLocalVue()

localVue.use(VeeValidate)
localVue.use(VueRouter)

const $router = new VueRouter()

describe('OrderForm component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(OrderForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should call handleSubmit when clicking the send button', () => {
    const wrapper = shallow(OrderForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    const spy = jest.spyOn(wrapper.vm, 'handleSubmit')

    const submitButton = wrapper.find('button[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalledWith('order-form')
  })

  it('should emit "submit" event with order details', async () => {
    const wrapper = shallow(OrderForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    const spy = jest.spyOn(wrapper.vm, '$emit')

    const orderDetails = {
      budget: 500,
      company: 'International Spying Agency',
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      url: 'https://sterling-malory-archer.com',
      message: 'This is an awesome message',
      phone: '0041794672849'
    }

    wrapper.setData(orderDetails)

    await wrapper.vm.handleSubmit('order-form')

    expect(spy).toHaveBeenCalledWith('submit', orderDetails)
  })

  it('should not emit "submit" event if the form has errors', async () => {
    const wrapper = shallow(OrderForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    const spy = jest.spyOn(wrapper.vm, '$emit')

    const invalidOrderDetails = {
      budget: 1200,
      company: 'International Spying Agency',
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      url: '',
      message: 'This is an awesome message'
    }

    wrapper.setData(invalidOrderDetails)

    await wrapper.vm.handleSubmit('order-form')

    expect(spy).not.toHaveBeenCalled()
  })

  it('should navigate back when cancel button clicked', () => {
    const wrapper = shallow(OrderForm, {
      localVue,
      router: $router,
      provide: {
        $validator: new Validator()
      }
    })

    wrapper.setProps({ showCancel: true })

    const spy = jest.spyOn(wrapper.vm.$router, 'back')

    wrapper.vm.goBack()

    expect(spy).toHaveBeenCalled()
  })

  it('snapshot', () => {
    const wrapper = mount(OrderForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('snapshot with form error', () => {
    const wrapper = mount(OrderForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    wrapper.setData({ hasError: true })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('snapshot with cancel button', () => {
    const wrapper = mount(OrderForm, {
      localVue,
      provide: {
        $validator: new Validator()
      },
      propsData: {
        showCancel: true
      }
    })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
