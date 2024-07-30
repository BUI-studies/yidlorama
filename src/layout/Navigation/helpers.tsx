import { COMMON_ROUTES_NAMES, GARSON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from '@/routing'
import { NavMenu } from './type'
import { ROLES } from '@/types'

export const createNavMenu = (role: string | undefined) => {
	let navMenu: NavMenu[] = []

	if (role === ROLES.GARSON) {
		navMenu = [
			{ id: 0, title: 'Dashboard', url: COMMON_ROUTES_NAMES.HOME },
			{ id: 1, title: 'Create Order', url: GARSON_ROUTES_NAMES.CREATE_ORDER },
			{ id: 2, title: 'Orders', url: COMMON_ROUTES_NAMES.ORDERS },
		]
	} else if (role === ROLES.ADMIN) {
		navMenu = [
			{ id: 0, title: 'Dashboard', url: COMMON_ROUTES_NAMES.HOME },
			{ id: 1, title: 'Users', url: ADMIN_ROUTES_NAMES.USERS },
			{ id: 2, title: 'Menu', url: ADMIN_ROUTES_NAMES.MENU },
			{ id: 3, title: 'Tables', url: ADMIN_ROUTES_NAMES.TABLES },
			{ id: 4, title: 'Orders', url: COMMON_ROUTES_NAMES.ORDERS },
		]
	} else return []

	return navMenu
}
