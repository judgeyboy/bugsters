import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import ContactForm from './ContactForm'

Vue.use(Vuex)

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

  it('snapshot', () => {
    const wrapper = shallow(ContactForm)
    let $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should dispatch "contact" with contact details', () => {
    const wrapper = shallow(ContactForm, { store })
    let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Subject',
      message: 'This is an awesome message'
    }

    wrapper.setData(contactDetails)

    const submitButton = wrapper.find('input[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('contact', contactDetails)
  })
})
