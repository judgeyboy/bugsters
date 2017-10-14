import store from './index'

describe('Store', () => {

  it('should contain correct modules and initial state', () => {
    expect(store.state.accountModule).toBeDefined()
    expect(store.state.contactModule).toBeDefined()
    expect(store.state.accountModule.loggedIn).toBe(false)
  })

})
