import actions from './actions'
import * as mutationTypes from '../../mutationTypes'
import * as actionTypes from '../../actionTypes'
import { testAction } from '../../../../testHelpers'

jest.mock('../../../services/account', () => {
  return {
    logIn: jest.fn().mockImplementation(() => {
      return Promise.resolve()
    })
  }
})

describe('AccountModule Actions', () => {

  it('Logout action should invoke mutation correctly', done => {
    testAction(actions[actionTypes.ACCOUNT_LOGOUT], null, {}, [
      { type: mutationTypes.ACCOUNT_LOGOUT }
    ], done)
  })

  it('Login action should invoke mutation correctly', done => {
    testAction(actions[actionTypes.ACCOUNT_LOGIN], null, {}, [
      { type: mutationTypes.ACCOUNT_LOGIN }
    ], done)
  })

})
