import mutations from './mutations'

describe('ContactModule Mutations', () => {

  it('SET_CONTACT_STATE should set state.contactState to "success"', () => {
    const state = {
      contactState: 'clean'
    }

    mutations.setContactState(state, 'success')
    expect(state.contactState).toBe('success')
  })

})
