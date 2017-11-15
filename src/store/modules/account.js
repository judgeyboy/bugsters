import accountService from '../../services/account'

const accountModule = {
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
      return accountService
        .logIn(loginDetails)
        .then(() => commit('login'))
    },

    logout ({ commit }) {
      commit('logout')
    },

    register ({ commit }, registerDetails) {
      accountService
        .register(registerDetails)
        .then(() => console.log('Thank you for registering'))
        .catch(error => console.log(error))
    }
  }
}

export default accountModule
