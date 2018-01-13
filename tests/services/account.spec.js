import sinon from 'sinon'

import accountService from '@/services/account'
import storageService from '@/services/storage'
import api from '@/services/api'
import store from '@/store'

describe('Account Service', () => {
  it('isLoggedIn should return true', () => {
    store.state.accountModule.loggedIn = true

    let isLoggedIn = accountService.isLoggedIn()
    expect(isLoggedIn).toBe(true)
  })

  it('should call storage service if login was successfull', async () => {
    let apiStub = sinon.stub(api, 'post').resolves({ data: { token: 'oiglwoke' } })
    let storageStub = sinon.stub(storageService, 'set')

    const loginDetails = {
      username: 'sterling',
      password: 'DangerZone!'
    }

    await accountService.logIn(loginDetails)
    sinon.assert.calledWith(storageStub, '__bugsters_token__', 'oiglwoke')

    apiStub.restore()
    storageStub.restore()
  })

  it('should handle promise rejection if login was unsuccessfull', async () => {
    let apiStub = sinon.stub(api, 'post').rejects({ error: 'something went wrong' })
    let storageStub = sinon.stub(storageService, 'set')

    const invalidLoginDetails = {
      username: 'barry',
      password: 'WorldsGreatestSpy'
    }

    await expect(accountService.logIn(invalidLoginDetails)).rejects.toEqual({ error: 'something went wrong' })
    sinon.assert.notCalled(storageStub)

    apiStub.restore()
    storageStub.restore()
  })
})
