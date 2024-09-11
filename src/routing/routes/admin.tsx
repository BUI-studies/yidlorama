import { ADMIN_ROUTES_NAMES } from '../routes.names'
import { Users, Menu, Tables, NewUser } from '@/pages'
import { addNewUser } from '@/pages/NewUser/helper'
import { getDishGroups } from '../../firebase/firestore'
import PrivateRoute from '../PrivateRoute'
import { getUsersData } from '@/firebase/firestore'

export default [
	{
		path: ADMIN_ROUTES_NAMES.USERS,
		element: (
			<PrivateRoute>
				<Users />
			</PrivateRoute>
		),
		loader: getUsersData,
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
		loader: getDishGroups
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
