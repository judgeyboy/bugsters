import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { shallow } from 'vue-test-utils'
import ContactForm from './ContactForm'

Vue.use(VeeValidate)

describe('ContactForm component', () => {

  it('should call onSubmit when clicking the send button', () => {
    const wrapper = shallow(ContactForm)
    let spy = jest.spyOn(wrapper.vm, 'handleSubmit')

    const submitButton = wrapper.find('input[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalled()
  })

  it('should emit "submit" event with contact details', async () => {
    const wrapper = shallow(ContactForm)
    let spy = jest.spyOn(wrapper.vm, '$emit')

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Zone',
      message: 'This is an awesome message'
    }

    wrapper.setData(contactDetails)

    await wrapper.vm.handleSubmit()

    expect(spy).toHaveBeenCalledWith('submit', contactDetails)
  })

  it('should not emit "submit" event if the form has errors', async () => {
    const wrapper = shallow(ContactForm)
    let spy = jest.spyOn(wrapper.vm, '$emit')

    const invalidContactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Subject',
      message: ''
    }

    wrapper.setData(invalidContactDetails)

    await wrapper.vm.handleSubmit()

    expect(spy).not.toHaveBeenCalled()
  })

})
