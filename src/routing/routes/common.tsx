import { COMMON_ROUTES_NAMES } from '../routes.names'
import { Home, Auth, Orders } from '@/pages'
import { authAction } from '@/actions'

export default [
	{
		path: COMMON_ROUTES_NAMES.HOME,
		element: <Home />,
	},
	{
		path: COMMON_ROUTES_NAMES.AUTH,
		element: <Auth />,
		action: authAction,
	},
	{
		path: COMMON_ROUTES_NAMES.ORDERS,
		element: <Orders />,
		children: [
			{
				path: COMMON_ROUTES_NAMES.CREATE_ORDER,
				element: <h2>New Order</h2>,
			},
		],
	},
]
