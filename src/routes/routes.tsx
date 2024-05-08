import { COMMON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from './rotues.names'
import { ROLES } from './routes.roles'

//Requires an implementation of auth context or whatewer instead

//@ts-expect-error auth is absent yet thus no typing provided
export const getCurrentRoutes = auth => {
	switch (auth.role) {
		case ROLES.ADMIN:
			return [
				{
					index: true,
					element: <h2>Home</h2>,
				},
				{
					path: ADMIN_ROUTES_NAMES.USERS,
					element: <h2>Manage users</h2>,
				},
				{
					path: ADMIN_ROUTES_NAMES.MENUS,
					element: <h2>Manage menus</h2>,
				},
				{
					path: ADMIN_ROUTES_NAMES.TABLES,
					element: <h2>Manage tables</h2>,
				},
				{
					path: COMMON_ROUTES_NAMES.ORDERS,
					element: <h2>Manage orders</h2>,
				},
			]
		case ROLES.GARSON:
			return [
				{
					index: true,
					element: <h2>Home</h2>,
				},
				{
					path: COMMON_ROUTES_NAMES.ORDERS,
					element: <h2>Manage orders</h2>,
				},
				{
					path: COMMON_ROUTES_NAMES.CREATE_ORDER,
					element: <h2>Create order</h2>,
				},
			]
		default:
			return [
				{
					index: true,
					element: <h2>Auth page</h2>,
				},
			]
	}
}
