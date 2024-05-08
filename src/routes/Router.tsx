import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getCurrentRoutes } from './routes'
import { COMMON_ROUTES_NAMES } from './rotues.names'
import { Root } from '../components'

//Requires an implementation of auth context or whatewer instead for now this is just a cork
const auth = { role: 'admin' }

const router = createBrowserRouter([
	{
		path: COMMON_ROUTES_NAMES.HOME,
		element: <Root />,
		children: getCurrentRoutes(auth),
	},
])

const Router: FC = () => {
	return <RouterProvider router={router} />
}

export default Router
