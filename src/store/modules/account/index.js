import accountService from '../../../services/account'
import * as mutationTypes from '../../mutationTypes'
import * as actionTypes from '../../actionTypes'

const accountModule = {
  state: {
    loggedIn: false
  },

  mutations: {
    [mutationTypes.ACCOUNT_LOGIN] (state) {
      state.loggedIn = true
    },

    [mutationTypes.ACCOUNT_LOGOUT] (state) {
      state.loggedIn = false
    }
  },

  actions: {
    [actionTypes.ACCOUNT_LOGIN] ({ commit }, loginDetails) {
      return accountService
        .logIn(loginDetails)
        .then(() => commit(mutationTypes.ACCOUNT_LOGIN))
    },

    [actionTypes.ACCOUNT_LOGOUT] ({ commit }) {
      commit(mutationTypes.ACCOUNT_LOGOUT)
    }
  }
}

export default accountModule
