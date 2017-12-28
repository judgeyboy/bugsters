import accountService from '../../../services/account'
import * as actionTypes from '../../actionTypes'
import * as mutationTypes from '../../mutationTypes'

const actions = {
  [actionTypes.ACCOUNT_LOGIN] ({ commit }, loginDetails) {
    return accountService
      .logIn(loginDetails)
      .then(response => {
        commit(mutationTypes.ACCOUNT_NAME, response.data.name)
        commit(mutationTypes.ACCOUNT_LOGIN)
      })
  },

  [actionTypes.ACCOUNT_LOGOUT] ({ commit }) {
    commit(mutationTypes.ACCOUNT_LOGOUT)
  }
}

export default actions
