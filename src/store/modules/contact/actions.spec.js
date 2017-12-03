import actions from './actions'
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

    testAction(actions.contact, null, {}, [
      { type: 'setContactState', payload: 'success' }
    ], done)
  })

  it('Contact action should invoke mutation "setContactState" with "error"', done => {
    serviceStub = sinon.stub(contactService, 'send').rejects()

    testAction(actions.contact, null, {}, [
      { type: 'setContactState', payload: 'error' }
    ], done)
  })

})
