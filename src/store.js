import Vue from 'vue'
import Vuex from 'vuex'
import accountService from './services/account'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    loggedIn: false
  },

  mutations: {
    login (state) {
      state.loggedIn = true
    },
    logout (state) {
      state.loggedIn = false
    }
  },

  actions: {
    login ({ commit }, loginDetails) {
      accountService
        .logIn(loginDetails)
        .then(() => commit('login'))
        .catch(error => console.error(error))
    },
    logout ({ commit }) {
      commit('logout')
    }
  }

})

export default store
