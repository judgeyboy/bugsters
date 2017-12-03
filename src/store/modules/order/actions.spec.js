import sinon from 'sinon'

import actions from './actions'
import { ORDER_SEND } from '../../actionTypes'
import { ORDER_SEND_SUCCESS, ORDER_SEND_ERROR } from '../../mutationTypes'
import { testAction } from '../../../../testHelpers'
import orderService from '../../../services/order'

describe('Order Actions', () => {

  let serviceStub

  afterEach(() => {
    serviceStub.restore()
  })

  it('ORDER_SEND action should invoke mutation "ORDER_SEND_SUCCESS"', done => {
    serviceStub = sinon.stub(orderService, 'send').resolves()

    testAction(actions[ORDER_SEND], null, {}, [
      { type: ORDER_SEND_SUCCESS }
    ], done)
  })

  it('ORDER_SEND action should invoke mutation "ORDER_SEND_ERROR"', done => {
    serviceStub = sinon.stub(orderService, 'send').rejects()

    testAction(actions[ORDER_SEND], null, {}, [
      { type: ORDER_SEND_ERROR }
    ], done)
  })

})
