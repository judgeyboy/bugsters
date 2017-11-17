import axios from 'axios'

class OrderService {
  send (orderDetails) {
    return axios
      .post('https://bugsters-api.herokuapp.com/order', orderDetails, { headers: { 'Content-Type': 'application/json' } })
  }
}

export default new OrderService()
