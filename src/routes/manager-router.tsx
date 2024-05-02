import { createBrowserRouter } from 'react-router-dom'
import { COMMON_ROUTES_NAMES } from './rotues.names'

const managerRouter = createBrowserRouter([
	{
		path: COMMON_ROUTES_NAMES.HOME,
		element: <h2>Welcome to Yidlorama!</h2>,
		children: [],
	},
])

export default managerRouter
