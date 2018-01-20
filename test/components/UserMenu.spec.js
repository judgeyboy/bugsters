import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { shallow, createLocalVue } from 'vue-test-utils'

import UserMenu from '@/components/UserMenu'
import { ACCOUNT_LOGOUT } from '@/store/actionTypes'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('UserMenu component', () => {
  it('should be a vue instance', () => {
    const wrapper = shallow(UserMenu, {
      localVue,
      store: new Vuex.Store({
        state: {
          accountModule: {
            loggedIn: false
          }
        }
      })
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('should render a login button if the user is not logged in', () => {
    const wrapper = shallow(UserMenu, {
      localVue,
      store: new Vuex.Store({
        state: {
          accountModule: {
            loggedIn: false
          }
        }
      })
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should render a dropdown button if the user is logged in and the user name is displayed', () => {
    const wrapper = shallow(UserMenu, {
      localVue,
      store: new Vuex.Store({
        state: {
          accountModule: {
            loggedIn: true,
            name: 'Sterling Archer'
          }
        }
      })
    })
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should toggle the showMenu correctly', () => {
    const wrapper = shallow(UserMenu, {
      localVue,
      store: new Vuex.Store({
        state: {
          accountModule: {
            loggedIn: true,
            name: 'Sterling Archer'
          }
        }
      })
    })
    wrapper.setData({ showMenu: true })
    wrapper.vm.toggleMenu()
    expect(wrapper.vm.showMenu).toBe(false)
  })

  it('should dispatch "ACCOUNT_LOGOUT" action when logout was clicked', () => {
    const wrapper = shallow(UserMenu, {
      localVue,
      store: new Vuex.Store({
        state: {
          accountModule: {
            loggedIn: true
          }
        },
        actions: {
          [ACCOUNT_LOGOUT]: jest.fn()
        }
      })
    })

    let spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    wrapper.vm.logout()

    expect(spy).toHaveBeenCalledWith('ACCOUNT_LOGOUT')
  })
})
