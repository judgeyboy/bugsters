import contactService from '../../services/contact'

const contactModule = {
  actions: {
    contact ({ commit }, contactDetails) {
      contactService
        .send(contactDetails)
        .then(() => console.log('Thank you for contacting us'))
        .catch(error => console.log(error))
    }
  }
}

export default contactModule
