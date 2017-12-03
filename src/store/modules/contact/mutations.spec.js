import mutations from './mutations'
import { CONTACT_SET_STATE } from '../../mutationTypes'

describe('ContactModule Mutations', () => {

  it('CONTACT_SET_STATE should set state.contactState to "success"', () => {
    const state = {
      contactState: 'clean'
    }

    mutations[CONTACT_SET_STATE](state, 'success')
    expect(state.contactState).toBe('success')
  })

})
