import { COMMON_ROUTES_NAMES } from '../routes.names'
import { Home, Auth, Orders } from '../../pages'
import {newUserAction} from '../../pages/Auth'
export default [
  {
    path: COMMON_ROUTES_NAMES.HOME,
    element: <Home />,
  },
  {
    path: COMMON_ROUTES_NAMES.AUTH,
    element: <Auth />,
    action: newUserAction,
  },
  {
    path: COMMON_ROUTES_NAMES.ORDERS,
    element: <Orders />,
  },
]
