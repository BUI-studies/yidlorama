export enum COMMON_ROUTES_NAMES {
	HOME = '/',
	AUTH = '/auth',
	ORDERS = '/orders',
}

export enum ADMIN_ROUTES_NAMES {
	USERS = '/users',
	MENUS = '/menus',
	TABLES = '/tables',
}

export enum GARSON_ROUTES_NAMES {
	TABLES = '/tables',
	MENUS = '/menus',
}

export type ROUTES_NAMES = COMMON_ROUTES_NAMES & ADMIN_ROUTES_NAMES & GARSON_ROUTES_NAMES
