import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import garsonRouter from './garson-router'
import managerRouter from './manager-router'
import authRouter from './auth-router'

import { ROLES } from './routes.roles'

const Router: FC = () => {
	const userRole: ROLES = ROLES.MANAGER
	let router = authRouter

	switch (userRole) {
		case ROLES.MANAGER:
			router = managerRouter
			break
		case ROLES.GARSON:
			router = garsonRouter
			break
	}

	return <RouterProvider router={router} />
}

export default Router
