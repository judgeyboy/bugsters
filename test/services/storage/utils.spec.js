import sinon from 'sinon'

import { isLocalStorageAvailable } from '@/services/storage/utils'
import localStorageMock from '../__mocks__/localStorage'

window.localStorage = localStorageMock

describe('Utils', () => {
  describe('isLocalStorageAvailable Function', () => {
    it('should return true if localStorage is available', () => {
      const actual = isLocalStorageAvailable()
      expect(actual).toBeTruthy()
    })

    it('should return false if some error is thrown', () => {
      const exception = new Error('some error')
      const localStorageStub = sinon.stub(window.localStorage, 'setItem').throwsException(exception)
      const actual = isLocalStorageAvailable()
      expect(actual).toBeFalsy()
      localStorageStub.restore()
    })

    it('should return false if error is DOMException and there is already something stored', () => {
      const exception = new DOMException('My DOM Excpetion message', 'My Name')
      window.localStorage.setItem('boo', 'dii')
      const localStorageStub = sinon.stub(window.localStorage, 'setItem').throwsException(exception)
      const actual = isLocalStorageAvailable()
      expect(actual).toBeFalsy()
      localStorageStub.restore()
    })

    it('should return true if error is DOMException and has a code of 22 and nothing is stored', () => {
      const exception = new DOMException('My DOM Excpetion message', 'My Name')
      exception.code = 22
      const localStorageStub = sinon.stub(window.localStorage, 'setItem').throwsException(exception)
      const actual = isLocalStorageAvailable()
      expect(actual).toBeTruthy()
      localStorageStub.restore()
    })
  })
})
