import { useEffect } from 'react'
import { useActionData, Form, useNavigate } from 'react-router-dom'
import { AuthActionData, AUTH_STATUS } from '@/actions'
import { useAuth } from '@/firebase'
import { COMMON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from '@/routing'
import { ROLES } from '@/types'
import styles from './Auth.module.scss'

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
		<section className={styles.auth}>
			<Form
				className={styles.authForm}
				action={COMMON_ROUTES_NAMES.AUTH}
				method="post"
			>
				{actionData?.status === 'error' && <p className={styles.authFormError}>{actionData.message}</p>}
				<input
					className={styles.authFormInput}
					type="email"
					name="email"
					placeholder="User name"
					required
				/>
				<input
					className={styles.authFormInput}
					type="password"
					name="password"
					placeholder="Password"
					required
				/>
				<button
					className={styles.authFormSubmit}
					type="submit"
				>
					Submit
				</button>
			</Form>
		</section>
	)
}

export default Auth
