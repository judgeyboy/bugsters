import sinon from 'sinon'
import axios from 'axios'

import contactService from './contact'

describe('Contact Service', () => {

  it('should send contact details with correct POST request', async () => {
    let axiosStub = sinon.stub(axios, 'post').resolves()

    const contactDetails = {
      name: 'Sterling Archer',
      email: 'duchess@spy-agency.com',
      subject: 'Danger Zone',
      message: 'This is an awesome message'
    }

    await contactService.send(contactDetails)
    expect(axiosStub.calledWith(
      "https://bugsters-api.herokuapp.com/mail/contact",
      {
        "name": "Sterling Archer",
        "email": "duchess@spy-agency.com",
        "subject": "Danger Zone",
        "message": "This is an awesome message"
      },
      {
        "headers": {
          "Content-Type": "application/json"
        }
      }
    )).toBe(true)
  })

})
