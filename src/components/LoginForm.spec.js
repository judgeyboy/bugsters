import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VeeValidate, { Validator } from 'vee-validate'
import { shallow } from 'vue-test-utils'
import LoginForm from './LoginForm'
import { ACCOUNT_LOGIN } from '../store/actionTypes'

Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.use(VueRouter)

const $router = new VueRouter()

describe('LoginForm component', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions: {
        [ACCOUNT_LOGIN]: jest.fn()
      }
    })
  })

  it('should dispatch "login" with login details', async () => {
    const wrapper = shallow(LoginForm, {
      store,
      router: $router,
      provide: { $validator: new Validator() }
    })
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const loginDetails = {
      email: 'duchess@spy-agency.com',
      password: 'DangerZone!'
    }

    wrapper.setData(loginDetails)

    await wrapper.vm.onSubmit()

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(ACCOUNT_LOGIN, loginDetails)
  })

  it('should not dispatch "login" if the form has errors', async () => {
    const wrapper = shallow(LoginForm, {
      store,
      provide: { $validator: new Validator() }
    })
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
      router: $router,
      provide: { $validator: new Validator() }
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
