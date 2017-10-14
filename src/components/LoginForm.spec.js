import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import LoginForm from './LoginForm'

Vue.use(Vuex)

describe('LoginForm component', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions: {
        login: jest.fn()
      }
    })
  })

  it('snapshot', () => {
    const wrapper = shallow(LoginForm)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should dispatch "login" with login details', () => {
    const wrapper = shallow(LoginForm, { store })
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const loginDetails = {
      email: 'duchess@spy-agency.com',
      password: 'DangerZone!'
    }

    wrapper.setData(loginDetails)

    const submitButton = wrapper.find('input[type=submit]')
    submitButton.trigger('click')

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('login', loginDetails)
  })
})
