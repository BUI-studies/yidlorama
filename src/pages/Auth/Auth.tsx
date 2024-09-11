import { useEffect } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import { AuthActionData, AUTH_STATUS } from '@/actions'
import { useAuth } from '@/firebase'
import { COMMON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from '@/routing'
import { ROLES } from '@/types'
import { UniversalForm } from '@/components'
import { authForm } from './helper'
import classes from './Auth.module.scss'

const Auth = () => {
	const actionData = useActionData() as AuthActionData | undefined
	const { role } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (actionData?.status === AUTH_STATUS.SUCCESS && Object.values(ROLES).includes(role!)) {
			if (role && role === ROLES.ADMIN) {
				navigate(ADMIN_ROUTES_NAMES.USERS)
			} else {
				navigate(COMMON_ROUTES_NAMES.ORDERS)
			}
		}
	}, [actionData?.status, role, navigate])
	return (
		<>
			<div className={classes.authPage}>
				<UniversalForm data={authForm} />
			</div>
		</>
	)
}

export default Auth
