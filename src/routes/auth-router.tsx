import { createBrowserRouter } from 'react-router-dom'

import { COMMON_ROUTES_NAMES } from './rotues.names'

const authRouter = createBrowserRouter([
	{
		path: COMMON_ROUTES_NAMES.AUTH,
		element: <h2>AUTH KURWA</h2>,
	},
])

export default authRouter
