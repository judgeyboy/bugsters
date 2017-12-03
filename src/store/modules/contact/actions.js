import contactService from '../../../services/contact'
import { CONTACT_SEND } from '../../actionTypes'
import { CONTACT_SET_STATE } from '../../mutationTypes'

const actions = {
  [CONTACT_SEND] ({ commit }, contactDetails) {
    contactService
      .send(contactDetails)
      .then(() => commit(CONTACT_SET_STATE, 'success'))
      .catch(() => commit(CONTACT_SET_STATE, 'error'))
  }
}

export default actions
