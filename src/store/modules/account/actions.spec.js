import sinon from 'sinon'

import actions from './actions'
import * as mutationTypes from '../../mutationTypes'
import * as actionTypes from '../../actionTypes'
import { testAction } from '../../../../testHelpers'
import accountService from '../../../services/account'


describe('AccountModule Actions', () => {

  let serviceStub

  afterEach(() => {
    serviceStub.restore()
  })

  it('Login action should invoke mutation correctly', done => {
    serviceStub = sinon.stub(accountService, 'logIn').resolves({ data: { name: 'Sterling Archer' } })

    testAction(actions[actionTypes.ACCOUNT_LOGIN], null, {}, [
      { type: mutationTypes.ACCOUNT_NAME, payload: 'Sterling Archer' },
      { type: mutationTypes.ACCOUNT_LOGIN }
    ], done)
  })

  it('Logout action should invoke mutation correctly', done => {
    testAction(actions[actionTypes.ACCOUNT_LOGOUT], null, {}, [
      { type: mutationTypes.ACCOUNT_LOGOUT }
    ], done)
  })

})
