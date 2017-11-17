import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate, { Validator } from 'vee-validate'
import { shallow } from 'vue-test-utils'
import OrderForm from './OrderForm'

Vue.use(Vuex)
Vue.use(VeeValidate)

describe('OrderForm component', () => {

  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions: {
        order: jest.fn()
      }
    })
  })

  it('should be a vue instance', () => {
    const wrapper = shallow(OrderForm, {
      store,
      provide: {
        $validator: new Validator()
      }
    })
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('should call handleSubmit when clicking the send button', () => {
    const wrapper = shallow(OrderForm, {
      store,
      provide: {
        $validator: new Validator()
      }
    })
    let spy = jest.spyOn(wrapper.vm, 'handleSubmit')

    const submitButton = wrapper.find('input[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalledWith('order-form')
  })

  it('should dispatch "order" with order details', async () => {
    const wrapper = shallow(OrderForm, {
      store,
      provide: {
        $validator: new Validator()
      }
    })
    let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const orderDetails = {
      budget: '300.-',
      company: 'International Spying Agency',
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      url: 'https://sterling-malory-archer.com',
      message: 'This is an awesome message'
    }

    wrapper.setData(orderDetails)

    await wrapper.vm.handleSubmit('order-form')

    expect(spy).toHaveBeenCalledWith('order', orderDetails)
    spy.mockReset() // - why do I have to do this?
  })

  it('should not log message if the form has errors', async () => {
    const wrapper = shallow(OrderForm, {
      store,
      provide: {
        $validator: new Validator()
      }
    })
    let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const invalidOrderDetails = {
      budget: '300.-',
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
