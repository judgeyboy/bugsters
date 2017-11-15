import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import LoginForm from './LoginForm'

Vue.use(Vuex)

const $router = {
  push: jest.fn()
}

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

  it('should redirect to a path after login success', async () => {
    const wrapper = shallow(LoginForm, {
      store,
      mocks: {
        $router
      }
    })
    const spy = jest.spyOn(wrapper.vm.$router, 'push')
    wrapper.setProps({ returnUrl: '/about' })

    await wrapper.vm.onSubmit()

    expect(spy).toHaveBeenCalledWith({ path: '/about' })
  })

  it('should display login error if login attempt failed', () => {
    const wrapper = shallow(LoginForm)

    wrapper.setData({ loginFailed: true })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
