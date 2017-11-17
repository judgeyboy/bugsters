import orderService from '../../services/order'

const orderModule = {
  actions: {
    order ({ commit }, orderDetails) {
      orderService
        .send(orderDetails)
        .then(() => console.log('Thank you for ordering'))
        .catch(error => console.log(error))
    }
  }
}

export default orderModule
