import { ADMIN_ROUTES_NAMES } from '../routes.names'
import { Users, Menu, Tables, NewUser } from '../../pages'
import PrivateRoute from '../PrivateRoute'
import { Children } from 'react'

export default [
	{
		path: ADMIN_ROUTES_NAMES.USERS,
		element: (
			<PrivateRoute>
				<Users />
			</PrivateRoute>
		),
		children: [
			{
				path: ADMIN_ROUTES_NAMES.NEW_USER,
				element: (
					<PrivateRoute>
						<NewUser />
					</PrivateRoute>
				),
			}
		]
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
