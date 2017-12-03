import { ORDER_SEND_SUCCESS, ORDER_SEND_ERROR } from '../../mutationTypes'

const mutations = {
  [ORDER_SEND_SUCCESS] (state) {
    state.orderState = 'success'
  },

  [ORDER_SEND_ERROR] (state) {
    state.orderState = 'error'
  }
}

export default mutations
