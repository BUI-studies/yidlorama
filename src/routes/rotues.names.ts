export enum COMMON_ROUTES_NAMES {
	HOME = '/',
	AUTH = '/auth',
	ORDERS = '/orders',
	CREATE_ORDER = '/create_order',
}

export enum ADMIN_ROUTES_NAMES {
	USERS = '/users',
	MENUS = '/menus',
	TABLES = '/tables',
}

export type ROUTES_NAMES = COMMON_ROUTES_NAMES & ADMIN_ROUTES_NAMES
