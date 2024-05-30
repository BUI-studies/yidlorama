import { COMMON_ROUTES_NAMES, GARSON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from '@/routing'

export interface NavMenu {
	id: number
	title: string
    url: COMMON_ROUTES_NAMES | ADMIN_ROUTES_NAMES | GARSON_ROUTES_NAMES
}