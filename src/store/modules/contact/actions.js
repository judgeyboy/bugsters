import contactService from '../../../services/contact'

const actions = {
  contact ({ commit }, contactDetails) {
    contactService
      .send(contactDetails)
      .then(() => commit('setContactState', 'success'))
      .catch(() => commit('setContactState', 'error'))
  }
}

export default actions
