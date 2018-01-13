import cookie from '@/services/storage/cookie'

describe('Cookie', () => {

  const KEY = '__test__'
  const VALUE = 'Sterling Archer'

  it('should set value in cookie', () => {
    cookie.set(KEY, VALUE)
    expect(document.cookie).toBe('__test__=Sterling%20Archer')
  })

  it('should get value from cookie', () => {
    const actualValue = cookie.get(KEY)
    expect(actualValue).toBe('Sterling Archer')
  })

  it('should overwrite the cookie with empty values', () => {
    cookie.remove(KEY)
    const actualValue = cookie.get(KEY)
    expect(actualValue).toBe(undefined)
  })

})
