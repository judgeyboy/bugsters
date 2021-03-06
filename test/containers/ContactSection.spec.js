import { shallow } from 'vue-test-utils'
import sinon from 'sinon'

import ContactSection from '@/containers/ContactSection'
import ContactService from '@/services/contact'

describe('ContactSection component', () => {
  it('should be a Vue instance', () => {
    const wrapper = shallow(ContactSection)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should contain a form submit handler "handleFormSubmit"', () => {
    const wrapper = shallow(ContactSection)
    expect(wrapper.vm.handleFormSubmit).toBeDefined()
  })

  it('should have "open" as default contactState', () => {
    const wrapper = shallow(ContactSection)
    expect(wrapper.vm.contactState).toBe('open')
  })

  it('should call contactService with contactDetails', async () => {
    const wrapper = shallow(ContactSection)
    const serviceStub = sinon.stub(ContactService, 'send').resolves()

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Zone',
      message: 'This is an awesome message'
    }

    await wrapper.vm.handleFormSubmit(contactDetails)

    sinon.assert.calledWith(serviceStub, contactDetails)
    serviceStub.restore()
  })

  it('should call contactSuccess', async () => {
    const wrapper = shallow(ContactSection)
    const spy = jest.spyOn(wrapper.vm, 'contactSuccess')
    const serviceStub = sinon.stub(ContactService, 'send').resolves()

    await wrapper.vm.handleFormSubmit()

    wrapper.vm.$nextTick(() => {
      expect(spy).toHaveBeenCalled()
    })

    serviceStub.restore()
  })

  it('should call contactError', async () => {
    const wrapper = shallow(ContactSection)
    const spy = jest.spyOn(wrapper.vm, 'contactError')
    const serviceStub = sinon.stub(ContactService, 'send').rejects()

    await wrapper.vm.handleFormSubmit()

    wrapper.vm.$nextTick(() => {
      expect(spy).toHaveBeenCalled()
    })

    serviceStub.restore()
  })

  it('contactSuccess should set contactState to "success"', () => {
    const wrapper = shallow(ContactSection)
    wrapper.vm.contactSuccess()
    expect(wrapper.vm.contactState).toBe('success')
  })

  it('contactError should set contactState to "error"', () => {
    const wrapper = shallow(ContactSection)
    wrapper.vm.contactError()
    expect(wrapper.vm.contactState).toBe('error')
  })

  it('handleCloseSuccess should set contactState to "open"', () => {
    const wrapper = shallow(ContactSection)
    wrapper.vm.handleCloseSuccess()
    expect(wrapper.vm.contactState).toBe('open')
  })

  it('handleCloseError should set contactState to "open"', () => {
    const wrapper = shallow(ContactSection)
    wrapper.vm.handleCloseError()
    expect(wrapper.vm.contactState).toBe('open')
  })
})
