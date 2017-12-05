import store from '../store'
import api from './api'

class AccountService {

  isLoggedIn () {
    return store.state.accountModule.loggedIn
  }

  logIn (loginDetails) {
    return api.post('/account/login', loginDetails)
  }
}

export default new AccountService()
