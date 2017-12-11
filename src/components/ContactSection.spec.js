import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'

import ContactSection from './ContactSection'
import { CONTACT_SEND } from '../store/actionTypes'

Vue.use(Vuex)

describe('ContactSection component', () => {

  it('should contain a form submit handler "handleFormSubmit"', () => {
    const wrapper = shallow(ContactSection, {
      store: new Vuex.Store({
        modules: {
          contactModule: {
            state: {
              contactState: 'clean'
            }
          }
        }
      })
    })

    expect(wrapper.vm.handleFormSubmit).toBeDefined()
  })

  it('should render only the form if contactState is "clean"', () => {
    const wrapper = shallow(ContactSection, {
      store: new Vuex.Store({
        modules: {
          contactModule: {
            state: {
              contactState: 'clean'
            }
          }
        }
      })
    })

    expect(wrapper.contains('.contact-section__form')).toBeTruthy()
    expect(wrapper.contains('.contact-section__success')).toBeFalsy()
    expect(wrapper.contains('.contact-section__error')).toBeFalsy()
  })

  it('should render only the success if contactState is "success"', () => {
    const wrapper = shallow(ContactSection, {
      store: new Vuex.Store({
        modules: {
          contactModule: {
            state: {
              contactState: 'success'
            }
          }
        }
      })
    })

    expect(wrapper.contains('.contact-section__form')).toBeFalsy()
    expect(wrapper.contains('.contact-section__success')).toBeTruthy()
    expect(wrapper.contains('.contact-section__error')).toBeFalsy()
  })

  it('should render only the error if contactState is "error"', () => {
    const wrapper = shallow(ContactSection, {
      store: new Vuex.Store({
        modules: {
          contactModule: {
            state: {
              contactState: 'error'
            }
          }
        }
      })
    })

    expect(wrapper.contains('.contact-section__form')).toBeFalsy()
    expect(wrapper.contains('.contact-section__success')).toBeFalsy()
    expect(wrapper.contains('.contact-section__error')).toBeTruthy()
  })


  describe('handleFormSubmit function', () => {

    it('should dispatch "contact" with contact details', () => {
      const wrapper = shallow(ContactSection, {
        store: new Vuex.Store({
          modules: {
            contactModule: {
              state: {
                contactState: 'clean'
              },
              actions: {
                [CONTACT_SEND]: jest.fn()
              }
            }
          }
        })
      })
      let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

      const values = {
        foo: 'bar',
        baz: 'foo'
      }

      wrapper.vm.handleFormSubmit(values)

      expect(spy).toHaveBeenCalledWith(CONTACT_SEND, values)
    })

  })

})
