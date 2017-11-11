import contactService from '../../services/contact'

const contactModule = {

  state: {
    contactState: 'clean'
  },

  mutations: {
    setContactState (state, contactState) {
      state.contactState = contactState
    }
  },

  actions: {
    contact ({ commit }, contactDetails) {
      contactService
        .send(contactDetails)
        .then(() => commit('setContactState', 'success'))
        .catch(() => commit('setContactState', 'error'))
    }
  }

}

export default contactModule
