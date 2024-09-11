import { ADMIN_ROUTES_NAMES } from '../routes.names'
import { Users, Menu, Tables } from '../../pages'
import { getDishGroups } from '../../firebase/firestore'
import PrivateRoute from '../PrivateRoute'

export default [
	{
		path: ADMIN_ROUTES_NAMES.USERS,
		element: (
			<PrivateRoute>
				<Users />
			</PrivateRoute>
		),
		loader: () => 
			new Promise(resolve => {
				setTimeout (() => {
					resolve({ header: [], tableData: [] })
				}, 1000)
			})
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
