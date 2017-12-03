import orderService from '../../../services/order'
import { ORDER_SEND } from '../../actionTypes'
import { ORDER_SEND_SUCCESS, ORDER_SEND_ERROR } from '../../mutationTypes'

const actions = {
  [ORDER_SEND] ({ commit }, orderDetails) {
    orderService
      .send(orderDetails)
      .then(() => commit(ORDER_SEND_SUCCESS))
      .catch(() => commit(ORDER_SEND_ERROR))
  }
}

export default actions
