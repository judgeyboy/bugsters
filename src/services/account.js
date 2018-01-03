import store from '../store'
import api from './api'
import storageService from './storage'

const TOKEN_KEY = '__bugsters_token__'

class AccountService {

  isLoggedIn () {
    return store.state.accountModule.loggedIn
  }

  logIn (loginDetails) {
    return new Promise((resolve, reject) => {
      api.post('/account/login', loginDetails)
         .then(response => {
           storageService.set(TOKEN_KEY, response.data.token)
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
    })
  }

  logOut () {
    storageService.remove(TOKEN_KEY)
  }
}

export default new AccountService()
