import { ADMIN_ROUTES_NAMES } from '../routes.names'
import { Users, Menu, Tables, NewUser } from '@/pages'
import { addNewUser } from '@/pages/NewUser/NewUser'
import PrivateRoute from '../PrivateRoute'
import { Children } from 'react'
import { mockUsersData } from '@/pages/Users/Users'

export default [
	{
		path: ADMIN_ROUTES_NAMES.USERS,
		element: (
			<PrivateRoute>
				<Users />
			</PrivateRoute>
		),
		loader: mockUsersData,
		children: [
			{
				path: ADMIN_ROUTES_NAMES.NEW_USER,
				element: (
					<PrivateRoute>
						<NewUser />
					</PrivateRoute>
				),
				action: addNewUser,
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
