import { COMMON_ROUTES_NAMES } from '../routes.names'
import { Home, Auth, Orders } from '../../pages'
export default [
	{
		path: COMMON_ROUTES_NAMES.HOME,
		element: <Home />,
	},
	{
		path: COMMON_ROUTES_NAMES.AUTH,
		element: <Auth />,
	},
	{
		path: COMMON_ROUTES_NAMES.ORDERS,
		element: <Orders />,
	},
]
