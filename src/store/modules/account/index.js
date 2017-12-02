import accountService from '../../../services/account'
import mutations from './mutations'
import * as mutationTypes from '../../mutationTypes'
import * as actionTypes from '../../actionTypes'

const accountModule = {
  state: {
    loggedIn: false
  },

  mutations,

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
