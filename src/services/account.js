import axios from 'axios'

class AccountService {
  logIn (loginDetails) {
    return axios
      .post('https://bugsters-api.herokuapp.com/account/login', loginDetails, { headers: { 'Content-Type': 'application/json' } })
  }
}

export default new AccountService()
