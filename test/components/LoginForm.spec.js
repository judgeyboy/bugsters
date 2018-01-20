import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VeeValidate, { Validator } from 'vee-validate'
import { shallow, createLocalVue } from 'vue-test-utils'
import sinon from 'sinon'

import LoginForm from '@/components/LoginForm'
import { ACCOUNT_LOGIN } from '@/store/actionTypes'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VeeValidate)
localVue.use(VueRouter)

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
      localVue,
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
      localVue,
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
      localVue,
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

  it('should set isLoading to false and loginFailed to true if login fails', async () => {
    const wrapper = shallow(LoginForm, {
      localVue,
      store,
      router: $router,
      provide: { $validator: new Validator() }
    })
    const storeStub = sinon.stub(wrapper.vm.$store, 'dispatch').rejects()

    const loginDetails = {
      email: 'duchess@spy-agency.com',
      password: 'DangerZone!'
    }

    wrapper.setData(loginDetails)

    await wrapper.vm.onSubmit()

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.loginFailed).toBe(true)
      expect(wrapper.vm.isLoading).toBe(false)
    })

    storeStub.restore()
  })

  /*
  * Skipping the snapshot tests because the shallow rendering does dont provide all the necessary elements
  */

  it.skip('snapshot', () => {
    const wrapper = shallow(LoginForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it.skip('snapshot with login error', () => {
    const wrapper = shallow(LoginForm, {
      localVue,
      provide: {
        $validator: new Validator()
      }
    })

    wrapper.setData({ loginFailed: true })

    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
