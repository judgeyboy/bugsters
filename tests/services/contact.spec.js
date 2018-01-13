import sinon from 'sinon'

import api from '@/services/api'
import contactService from '@/services/contact'

describe('Contact Service', () => {

  it('should send contact details with correct POST request', async () => {
    let apiStub = sinon.stub(api, 'post').resolves()

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Zone',
      message: 'This is an awesome message'
    }

    await contactService.send(contactDetails)

    sinon.assert.calledWith(apiStub, "/mail/contact", contactDetails)
  })

})
