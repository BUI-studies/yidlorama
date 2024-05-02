import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES_NAMES } from './rotues.names'
import { FC } from 'react'

const Router: FC = () => {
	const router = createBrowserRouter([
		{
			path: ROUTES_NAMES.HOME,
			element: <h2>Welcome to Yidlorama!</h2>,
			children: [],
		},
	])

	return <RouterProvider router={router} />
}

export default Router
