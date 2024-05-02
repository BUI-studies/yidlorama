import { createBrowserRouter } from 'react-router-dom'

import { GARSON_ROUTES_NAMES } from './rotues.names'

const garsonRouter = createBrowserRouter([
	{
		path: GARSON_ROUTES_NAMES.TABLES,
		element: <h2>Tables page</h2>,
	},
	{
		path: GARSON_ROUTES_NAMES.MENUS,
		element: <h2>Menus page</h2>,
	},
])

export default garsonRouter
