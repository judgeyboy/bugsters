import sinon from 'sinon'

import localStore from './localStore'
import localStorageMock from '../__mocks__/localStorage'

window.localStorage = localStorageMock

describe('LocalStore', () => {

  const KEY = '__test__'
  const VALUE = 'Sterling Archer'

  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should get an item', () => {
    const spy = jest.spyOn(window.localStorage, 'getItem')
    localStore.set(KEY, VALUE)
    const actualValue = localStore.get(KEY)
    expect(spy).toHaveBeenCalledWith(KEY)
    expect(actualValue).toBe(VALUE)
  })

  it('should set an item', () => {
    const spy = jest.spyOn(window.localStorage, 'setItem')
    localStore.set(KEY, VALUE)
    const actualValue = localStore.get(KEY)
    expect(spy).toHaveBeenCalledWith(KEY, VALUE)
    expect(actualValue).toBe(VALUE)
    jest.resetAllMocks()
  })

  it('should remove an item', () => {
    const spy = jest.spyOn(window.localStorage, 'removeItem')
    localStore.set(KEY, VALUE)
    localStore.remove(KEY)
    expect(spy).toHaveBeenCalledWith(KEY)
  })

})
