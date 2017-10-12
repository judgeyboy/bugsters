import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import ContactForm from './ContactForm.vue'

Vue.use(Vuex)

describe('ContactForm component', () => {
  let component, actions, store, vm

  beforeEach(() => {
    actions = {
      contact : jest.fn()
    }

    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('snapshot', () => {
    const wrapper = shallow(ContactForm)
    let $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('submit', () => {
    const wrapper = shallow(ContactForm, { store })

    const submitButton = wrapper.find('input[type=submit]')
    submitButton.trigger('click')

    expect(actions.contact).toHaveBeenCalled()
    // Todo: find a way to test what the parameters are (example below)
    // expect(actions.contact).toHaveBeenCalledWith('contact', ...)
  })

})
