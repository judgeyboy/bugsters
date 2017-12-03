import actions from './actions'
import { CONTACT_SEND } from '../../actionTypes'
import { CONTACT_SET_STATE } from '../../mutationTypes'
import { testAction } from '../../../../testHelpers'
import contactService from '../../../services/contact'
import sinon from 'sinon'

describe('ContactModule Actions', () => {

  let serviceStub

  afterEach(() => {
    serviceStub.restore()
  })

  it('Contact action should invoke mutation "setContactState" with "success"', done => {
    serviceStub = sinon.stub(contactService, 'send').resolves()

    testAction(actions[CONTACT_SEND], null, {}, [
      { type: CONTACT_SET_STATE, payload: 'success' }
    ], done)
  })

  it('Contact action should invoke mutation "setContactState" with "error"', done => {
    serviceStub = sinon.stub(contactService, 'send').rejects()

    testAction(actions[CONTACT_SEND], null, {}, [
      { type: CONTACT_SET_STATE, payload: 'error' }
    ], done)
  })

})
