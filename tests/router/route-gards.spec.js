import { authenticate } from '@/router/route-guards'

jest.mock('@/services/account', () => { return {} })

const accountService = require('@/services/account')

describe('Route guards', () => {
  describe('Authenticate guard', () => {
    it('should redirect to login if user is not logged in containing the correct returnUrl', () => {
      accountService.isLoggedIn = () => false
      const next = jest.fn()
      const to = {
        path: '/about'
      }

      authenticate(to, null, next)

      expect(next).toHaveBeenCalledWith({
        'path': '/login',
        'query': {
          'returnUrl': '/about'
        }
      })
    })

    it('should pass through the guard if user is logged in', () => {
      accountService.isLoggedIn = () => true
      const next = jest.fn()

      authenticate(null, null, next)

      expect(next).toHaveBeenCalledWith()
    })
  })
})
