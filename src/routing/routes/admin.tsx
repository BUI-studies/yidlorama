import { ADMIN_ROUTES_NAMES } from '../routes.names'
import { Users, Menu, Tables } from '../../pages'
import PrivateRoute from '../PrivateRoute'

export default [
	{
		path: ADMIN_ROUTES_NAMES.USERS,
		element: (
			<PrivateRoute>
				<Users />
			</PrivateRoute>
		),
	},
	{
		path: ADMIN_ROUTES_NAMES.MENU,
		element: (
			<PrivateRoute>
				<Menu />
			</PrivateRoute>
		),
	},
	{
		path: ADMIN_ROUTES_NAMES.TABLES,
		element: (
			<PrivateRoute>
				<Tables />
			</PrivateRoute>
		),
	},
]
