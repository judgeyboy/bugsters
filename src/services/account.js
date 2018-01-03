import store from '../store'
import api from './api'
import storageService from './storage'

class AccountService {

  isLoggedIn () {
    return store.state.accountModule.loggedIn
  }

  logIn (loginDetails) {
    return new Promise((resolve, reject) => {
      api.post('/account/login', loginDetails)
         .then(response => {
           storageService.set('__bugsters_token__', response.data.token)
           resolve(response)
         })
         .catch(error => {
           reject(error)
         })
    })
  }
}

export default new AccountService()
