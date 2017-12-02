import accountModule from './index'
import * as mutationTypes from '../../mutationTypes'
import * as actionTypes from '../../actionTypes'

jest.mock('../../../services/account', () => {
  return {
    logIn: jest.fn().mockImplementation(() => {
      return Promise.resolve()
    })
  }
})

const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).toEqual(type)
      if (payload) {
        expect(payload).toEqual(payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).toBe(0)
    done()
  }
}

describe('AccountModule Actions', () => {

  it('Logout action should invoke mutation correctly', done => {
    testAction(accountModule.actions[actionTypes.ACCOUNT_LOGOUT], null, {}, [
      { type: mutationTypes.ACCOUNT_LOGOUT }
    ], done)
  })

  it('Login action should invoke mutation correctly', done => {
    testAction(accountModule.actions[actionTypes.ACCOUNT_LOGIN], null, {}, [
      { type: mutationTypes.ACCOUNT_LOGIN }
    ], done)
  })

})
