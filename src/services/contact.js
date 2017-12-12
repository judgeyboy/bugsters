import api from './api'

class ContactService {

  send (contactDetails) {
    return api.post('/mail/contact', contactDetails)
  }

}

export default new ContactService()
