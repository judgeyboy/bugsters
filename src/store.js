import Vue from 'vue'
import Vuex from 'vuex'
import accountService from './services/account'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    loggedIn: false
  },

  mutations: {
    logIn (state) {
      state.loggedIn = true
    }
  },

  actions: {
    logIn ({ commit }, loginDetails) {
      accountService
        .logIn(loginDetails)
        .then(() => commit('logIn'))
        .catch(error => console.error(error))
    }
  }

})

export default store
