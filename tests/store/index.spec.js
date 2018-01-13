import store from '@/store/index'

describe('Store', () => {

  it('should contain correct modules and initial state', () => {
    expect(store.state.accountModule).toBeDefined()
    expect(store.state.accountModule.loggedIn).toBe(false)
  })

})
