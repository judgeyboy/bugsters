import sinon from 'sinon'

import storageService from './storage'
import localStorageMock from './__mocks__/localStorage'

window.localStorage = localStorageMock

describe('Storage Service', () => {

  const KEY = '__test__'
  const VALUE = 'Sterling Archer'

  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should get the correct value', () => {
    const spy = jest.spyOn(window.localStorage, 'getItem')
    storageService.localStorageAvailable = true
    storageService.set(KEY, VALUE)
    const actualValue = storageService.get(KEY)
    expect(spy).toHaveBeenCalledWith(KEY)
    expect(actualValue).toBe(VALUE)
  })

  it('should set the correct value', () => {
    const spy = jest.spyOn(window.localStorage, 'setItem')
    storageService.set(KEY, VALUE)
    const actualValue = storageService.get(KEY)
    expect(spy).toHaveBeenCalledWith(KEY, VALUE)
    expect(actualValue).toBe(VALUE)
    jest.resetAllMocks()
  })

  it('should not save to localStorage if it does not support it', () => {
    const spy = jest.spyOn(window.localStorage, 'setItem')
    storageService.localStorageAvailable = false
    window.localStorage.clear()
    storageService.set(KEY, VALUE)
    expect(spy).not.toHaveBeenCalled()
  })

  it('should remove an item', () => {
    const spy = jest.spyOn(window.localStorage, 'removeItem')
    storageService.localStorageAvailable = true
    storageService.set(KEY, VALUE)
    storageService.remove(KEY)
    expect(spy).toHaveBeenCalledWith(KEY)
  })

})
