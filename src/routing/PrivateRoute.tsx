import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/firebase'

import { COMMON_ROUTES_NAMES } from './routes.names'
import { FC, PropsWithChildren } from 'react'

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
	const auth = useAuth()
	const navigate = useNavigate()

	if (!auth) navigate(COMMON_ROUTES_NAMES.AUTH)

	return children
}

export default PrivateRoute
