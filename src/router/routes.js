import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import LoginForm from '@/components/LoginForm'
import { authenticate } from './route-guards'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: authenticate
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
    props: (route) => ({ returnUrl: route.query.returnUrl })
  }
]

export default routes
