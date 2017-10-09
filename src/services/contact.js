import axios from 'axios'

class ContactService {
  send (contactDetails) {
    return axios
      .post('https://bugsters-api.herokuapp.com/contact', contactDetails, { headers: { 'Content-Type': 'application/json' } })
  }
}

export default new ContactService()
