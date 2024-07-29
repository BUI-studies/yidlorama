import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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

	const router = createBrowserRouter([
		{
			path: COMMON_ROUTES_NAMES.HOME,
			element: <Root />,
			children: routesToRolesMap[auth.role as ROLES] || commonRoutes,
		},
	])

	return <RouterProvider router={router} />
}

export default Router
