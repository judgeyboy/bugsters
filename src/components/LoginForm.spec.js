import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import { shallow } from 'vue-test-utils'
import LoginForm from './LoginForm'

Vue.use(Vuex)
Vue.use(VeeValidate)

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

  it('should dispatch "login" with login details', async () => {
    const wrapper = shallow(LoginForm, { store })
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const loginDetails = {
      email: 'duchess@spy-agency.com',
      password: 'DangerZone!'
    }

    wrapper.setData(loginDetails)

    await wrapper.vm.onSubmit()

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('login', loginDetails)
  })

  it('should not dispatch "login" if the form has errors', async () => {
    const wrapper = shallow(LoginForm, { store })
    let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const invalidLoginDetails = {
      email: 'duchess@spy-agency.com',
      password: ''
    }

    wrapper.setData(invalidLoginDetails)

    await wrapper.vm.onSubmit()

    expect(spy).not.toHaveBeenCalled()
  })

  it('should redirect to a path after login success', async () => {
    const wrapper = shallow(LoginForm, {
      store,
      mocks: {
        $router
      }
    })
    const spy = jest.spyOn(wrapper.vm.$router, 'push')

    const loginDetails = {
      email: 'duchess@spy-agency.com',
      password: 'DangerZone!'
    }
    wrapper.setData(loginDetails)

    wrapper.setProps({ returnUrl: '/about' })

    await wrapper.vm.onSubmit()

    expect(spy).toHaveBeenCalledWith({ path: '/about' })
  })

  /*
    Skipping the snapshot tests because I don't know how to do a snapshot test with vee-validate!
    A data-vv-id is generated each time the test runs
  */

  it.skip('snapshot', () => {
    const wrapper = shallow(LoginForm)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it.skip('snapshot with login error', () => {
    const wrapper = shallow(LoginForm)

    wrapper.setData({ loginFailed: true })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })



})
