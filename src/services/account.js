import axios from 'axios'
import store from '../store'

class AccountService {
  isLoggedIn () {
    return store.state.accountModule.loggedIn
  }

  logIn (loginDetails) {
    return axios
      .post('https://bugsters-api.herokuapp.com/account/login', loginDetails, { headers: { 'Content-Type': 'application/json' } })
  }

  register (registerDetails) {
    return axios
      .post('https://bugsters-api.herokuapp.com/account/register', registerDetails, { headers: { 'Content-Type': 'application/json' } })
  }
}

export default new AccountService()
