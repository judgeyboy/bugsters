export function isLocalStorageAvailable () {
  const storage = window.localStorage
  try {
    const testKey = '__storage_test__'
    storage.setItem(testKey, 'availabilityTest')
    storage.removeItem(testKey)
    return true
  } catch (error) {
    return error instanceof DOMException && (
      // everthing except Firefox
      error.code === 22 ||
      // Firefox
      error.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      error.name === 'QuotaExceededError' ||
      // Firefox
      error.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
  }
}
