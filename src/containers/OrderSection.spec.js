import { shallow } from 'vue-test-utils'
import sinon from 'sinon'

import OrderSection from './OrderSection'
import OrderService from '@/services/order'

describe('OrderSection Container', () => {

  it('should be a Vue instance', () => {
    const wrapper = shallow(OrderSection)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should contain a form submit handler "handleFormSubmit"', () => {
    const wrapper = shallow(OrderSection)
    expect(wrapper.vm.handleFormSubmit).toBeDefined()
  })

  it('should have "open" as default orderState', () => {
    const wrapper = shallow(OrderSection)
    expect(wrapper.vm.orderState).toBe('open')
  })

  it('should call orderService with orderDetails', async () => {
    const wrapper = shallow(OrderSection)
    const serviceStub = sinon.stub(OrderService, 'send').resolves()

    const orderDetails = {
      budget: 800,
      company: 'International Spying Agency',
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      url: 'https://sterling-malory-archer.com',
      message: 'This is an awesome message',
      phone: '0041794672849'
    }

    await wrapper.vm.handleFormSubmit(orderDetails)

    sinon.assert.calledWith(serviceStub, orderDetails)
    serviceStub.restore()
  })

  it('should call orderSuccess', async () => {
    const wrapper = shallow(OrderSection)
    const spy = jest.spyOn(wrapper.vm, 'orderSuccess')
    const serviceStub = sinon.stub(OrderService, 'send').resolves()

    await wrapper.vm.handleFormSubmit()

    wrapper.vm.$nextTick(() => {
      expect(spy).toHaveBeenCalled()
    })

    serviceStub.restore()
  })

  it('should call orderError', async () => {
    const wrapper = shallow(OrderSection)
    const spy = jest.spyOn(wrapper.vm, 'orderError')
    const serviceStub = sinon.stub(OrderService, 'send').rejects()

    await wrapper.vm.handleFormSubmit()

    wrapper.vm.$nextTick(() => {
      expect(spy).toHaveBeenCalled()
    })

    serviceStub.restore()
  })

  it('OrderSuccess should set orderState and orderId', () => {
    const wrapper = shallow(OrderSection)
    wrapper.vm.orderSuccess({ data: 'iekgioe' })
    expect(wrapper.vm.orderState).toBe('success')
    expect(wrapper.vm.orderId).toBe('iekgioe')
  })

  it('OrderError should set orderState to "error"', () => {
    const wrapper = shallow(OrderSection)
    wrapper.vm.orderError()
    expect(wrapper.vm.orderState).toBe('error')
  })

})
