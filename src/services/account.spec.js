import sinon from 'sinon'
import axios from 'axios'

import accountService from './account'
import store from '../store'

describe('Account Service', () => {

  it('isLoggedIn should return true', () => {
    store.state.accountModule.loggedIn = true

    let isLoggedIn = accountService.isLoggedIn()
    expect(isLoggedIn).toBe(true)
  })

  it('logIn should make correct POST request', async () => {
    let axiosStub = sinon.stub(axios, 'post').resolves()

    axiosStub.calledWith

    const loginDetails = {
      username: 'sterling',
      password: 'DangerZone!'
    }

    await accountService.logIn(loginDetails)
    expect(axiosStub.calledWith(
      "https://bugsters-api.herokuapp.com/account/login",
      {
        "password": "DangerZone!",
        "username": "sterling"
      },
      {
        "headers": {
          "Content-Type": "application/json"
        }
      })).toBe(true)
  })

})
