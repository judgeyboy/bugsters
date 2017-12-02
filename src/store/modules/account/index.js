import mutations from './mutations'
import actions from './actions'

const accountModule = {
  state: {
    loggedIn: false
  },
  mutations,
  actions
}

export default accountModule
