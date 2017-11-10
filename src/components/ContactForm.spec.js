import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import { shallow } from 'vue-test-utils'
import ContactForm from './ContactForm'

Vue.use(Vuex)
Vue.use(VeeValidate)

describe('ContactForm component', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions: {
        contact: jest.fn()
      }
    })
  })

  it('should call onSubmit when clicking the send button', () => {
    const wrapper = shallow(ContactForm, { store })
    let spy = jest.spyOn(wrapper.vm, 'handleSubmit')

    const submitButton = wrapper.find('input[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalled()
  })

  it('should dispatch "contact" with contact details', async () => {
    const wrapper = shallow(ContactForm, { store })
    let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Zone',
      message: 'This is an awesome message'
    }

    wrapper.setData(contactDetails)

    await wrapper.vm.handleSubmit()

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('contact', contactDetails)
  })

  it('should not submit the form if the form has errors (no message provided)', async () => {
    const wrapper = shallow(ContactForm, { store })
    let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Subject',
      message: ''
    }

    wrapper.setData(contactDetails)

    await wrapper.vm.handleSubmit()

    expect(spy).not.toHaveBeenCalled()
  })
})
