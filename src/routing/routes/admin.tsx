import { ADMIN_ROUTES_NAMES } from '../routes.names'
import { Users, Menu, Tables } from '../../pages'

export default [
	{
		path: ADMIN_ROUTES_NAMES.USERS,
		element: <Users />,
	},
	{
		path: ADMIN_ROUTES_NAMES.MENU,
		element: <Menu />,
	},
	{
		path: ADMIN_ROUTES_NAMES.TABLES,
		element: <Tables />,
	},
]
