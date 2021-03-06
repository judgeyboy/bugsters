import sinon from 'sinon'

import api from '@/services/api'
import orderService from '@/services/order'

describe('Order Service', () => {
  it('should send order details with correct POST request', async () => {
    let apiStub = sinon.stub(api, 'post').resolves()

    const orderDetails = {
      budget: '300.-',
      company: 'International Spying Agency',
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      url: 'https://sterling-malory-archer.com',
      message: 'This is an awesome message',
      phone: '0041794672849'
    }

    await orderService.send(orderDetails)

    sinon.assert.calledWith(apiStub, '/order', orderDetails)
  })
})
