import { CONTACT_SET_STATE } from '../../mutationTypes'

const mutations = {
  [CONTACT_SET_STATE] (state, contactState) {
    state.contactState = contactState
  }
}

export default mutations
