import mutations from '@/store/modules/account/mutations'
import * as mutationTypes from '@/store/mutationTypes'

describe('AccountModule Mutations', () => {
  it('ACCOUNT_LOGIN should set state.loggedIn to true', () => {
    const state = {
      loggedIn: false
    }

    mutations[mutationTypes.ACCOUNT_LOGIN](state)
    expect(state.loggedIn).toBe(true)
  })

  it('ACCOUNT_LOGOUT should set state.loggedIn to false', () => {
    const state = {
      loggedIn: true,
      name: 'Sterling Archer'
    }

    mutations[mutationTypes.ACCOUNT_LOGOUT](state)
    expect(state.loggedIn).toBe(false)
    expect(state.name).toBe('')
  })

  it('ACCOUNT_NAME should set state.name to "Sterling Archer"', () => {
    const state = {
      name: ''
    }

    mutations[mutationTypes.ACCOUNT_NAME](state, 'Sterling Archer')
    expect(state.name).toBe('Sterling Archer')
  })
})
