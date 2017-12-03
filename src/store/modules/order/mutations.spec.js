import mutations from './mutations'
import { ORDER_SEND_SUCCESS, ORDER_SEND_ERROR } from '../../mutationTypes'

describe('Order Mutations', () => {

  it('ORDER_SEND_SUCCESS should set state.orderState to "success"', () => {
    const state = {
      orderState: 'clean'
    }

    mutations[ORDER_SEND_SUCCESS](state)
    expect(state.orderState).toBe('success')
  })

  it('ORDER_SEND_ERROR should set state.orderState to "error"', () => {
    const state = {
      orderState: 'clean'
    }

    mutations[ORDER_SEND_ERROR](state)
    expect(state.orderState).toBe('error')
  })

})
