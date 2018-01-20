import VeeValidate, { Validator } from 'vee-validate'
import { shallow, createLocalVue } from 'vue-test-utils'

import OrderForm from '@/components/OrderForm'

const localVue = createLocalVue()

localVue.use(VeeValidate)

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

    let spy = jest.spyOn(wrapper.vm, 'handleSubmit')

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
    let spy = jest.spyOn(wrapper.vm, '$emit')

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

    let spy = jest.spyOn(wrapper.vm, '$emit')

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
})
