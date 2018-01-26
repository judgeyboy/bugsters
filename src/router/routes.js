import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import LoginForm from '@/components/LoginForm'
import { authenticate } from './route-guards'
import OrderDetails from '@/components/OrderDetails'
import NewOrder from '@/components/NewOrder'

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
  },
  {
    path: '/orders/submit',
    name: 'NewOrder',
    component: NewOrder
  },
  {
    path: '/orders/:id',
    name: 'OrderDetails',
    component: OrderDetails
  }
]

export default routes
