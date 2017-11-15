import account from '../services/account'

export const authenticate = (to, from, next) => {
  if (account.isLoggedIn()) {
    next()
  } else {
    next({ path: '/login', query: { returnUrl: to.path } })
  }
}
