import mutations from './mutations'
import * as mutationTypes from '../../mutationTypes'

describe('AccountModule Mutations', () => {

  it('ACCOUNT_LOGIN should set state.loggedIn to true', () => {
    const state = {
      loggedIn: false
    }

    mutations[mutationTypes.ACCOUNT_LOGIN] (state)
    expect(state.loggedIn).toBe(true)
  })

  it('ACCOUNT_LOGOUT should set state.loggedIn to false', () => {
    const state = {
      loggedIn: true
    }

    mutations[mutationTypes.ACCOUNT_LOGOUT] (state)
    expect(state.loggedIn).toBe(false)
  })

})
