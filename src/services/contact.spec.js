import sinon from 'sinon'

import api from './api'
import contactService from './contact'

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
    expect(apiStub.calledWith("/mail/contact", contactDetails)).toBe(true)
  })

})
