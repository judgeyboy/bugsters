import Vue from 'vue'
import Vuex from 'vuex'
import {shallow} from 'vue-test-utils'
import Logout from './Logout'

Vue.use(Vuex)

describe('Logout component', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions: {
        logout: jest.fn()
      }
    })
  })

  it('snapshot', () => {
    const wrapper = shallow(Logout)
    const $html = wrapper.vm.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  it('should dispatch "logout" when link is clicked', () => {
    const wrapper = shallow(Logout, { store })
    const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')

    const logoutButton = wrapper.find('.logout a')
    logoutButton.trigger('click')

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('logout')
  })

})
