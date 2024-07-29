import { FC, useEffect, useState } from 'react'
import { RouteMatch, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from '@/layout'
import { ROLES } from '@/types/'

import commonRoutes from './routes/common'
import adminRoutes from './routes/admin'
import garsonRoutes from './routes/garson'

import { COMMON_ROUTES_NAMES } from './routes.names'
import { useAuth } from '@/firebase'

//Requires an implementation of auth context or whatewer instead for now this is just a cork

const routesToRolesMap = {
	[ROLES.ADMIN]: [...commonRoutes, ...adminRoutes],
	[ROLES.GARSON]: [...commonRoutes, ...garsonRoutes],
}

const Router: FC = () => {
	const auth = useAuth()
	const [router, setRouter] = useState<RouteObject[]>(commonRoutes)

	useEffect(() => {
		if (auth.role) {
			const roleRoutes = routesToRolesMap[auth.role as ROLES] || commonRoutes
			setRouter([
				{
					path: COMMON_ROUTES_NAMES.HOME,
					element: <Root />,
					children: roleRoutes,
				},
			])
		}
	}, [auth.role])

	if (!auth?.role) {
		return <p>Loading...</p>
	}

	return <RouterProvider router={createBrowserRouter(router)} />
}

export default Router
