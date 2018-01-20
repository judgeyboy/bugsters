import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'

import RegisterForm from '@/components/RegisterForm'

Vue.use(Vuex)

describe('RegisterForm component', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions: {
        register: jest.fn()
      }
    })
  })

  it('snapshot', () => {
    const wrapper = shallow(RegisterForm)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should dispatch "register" with register details', () => {
    const wrapper = shallow(RegisterForm, { store })
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const registerDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      password: 'DangerZone!',
      passwordRepeat: 'DangerZone!'
    }

    wrapper.setData(registerDetails)

    const submitButton = wrapper.find('input[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('register', registerDetails)
  })
})
