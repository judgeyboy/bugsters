import * as mutationTypes from '../../mutationTypes'

const mutations = {
  [mutationTypes.ACCOUNT_LOGIN] (state) {
    state.loggedIn = true
  },

  [mutationTypes.ACCOUNT_LOGOUT] (state) {
    state.loggedIn = false
  }
}

export default mutations
