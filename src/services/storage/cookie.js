import Cookies from 'cookies-js'

export default {
  get (key) {
    return Cookies.get(key)
  },

  set (key, value) {
    Cookies.set(key, value)
  },

  remove (key) {
    Cookies.expire(key)
  }
}
