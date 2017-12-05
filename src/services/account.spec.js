import sinon from 'sinon'

import accountService from './account'
import store from '../store'
import api from './api'

describe('Account Service', () => {

  it('isLoggedIn should return true', () => {
    store.state.accountModule.loggedIn = true

    let isLoggedIn = accountService.isLoggedIn()
    expect(isLoggedIn).toBe(true)
  })

  it('logIn should make correct POST request', async () => {
    let apiStub = sinon.stub(api, 'post').resolves()

    const loginDetails = {
      username: 'sterling',
      password: 'DangerZone!'
    }

    await accountService.logIn(loginDetails)
    expect(apiStub.calledWith("/account/login", loginDetails)).toBe(true)
  })

})
