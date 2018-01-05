import localStore from './localStore'
import cookieStore from './cookie'
import Cookies from 'cookies-js'
import { isLocalStorageAvailable } from './utils'

export function getStorage () {
  if (isLocalStorageAvailable()) {
    return localStore
  } else if (Cookies.enabled) {
    return cookieStore
  } else {
    console.error('Device does not support any storage')
  }
}

export default getStorage()
