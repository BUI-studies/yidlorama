import { COMMON_ROUTES_NAMES } from '../routes.names'
import { Home, Auth, Orders } from '../../pages'
import { action as userActionAuth } from '../../utils/actionsAuth'


export default [
	{
		path: COMMON_ROUTES_NAMES.HOME,
		element: <Home />,
	},
	{
		path: COMMON_ROUTES_NAMES.AUTH,
		element: <Auth />,
		action: userActionAuth
	},
	{
		path: COMMON_ROUTES_NAMES.ORDERS,
		element: <Orders />,
	},
]
