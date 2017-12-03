import actions from './actions'
import mutations from './mutations'

const orderModule = {
  state: {
    orderState: 'clean'
  },
  actions,
  mutations
}

export default orderModule
