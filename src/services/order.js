import api from './api'

class OrderService {

  send (orderDetails) {
    return api.post('/order', orderDetails)
  }

}

export default new OrderService()
