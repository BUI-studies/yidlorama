import { useEffect } from 'react'
import { useActionData, Form, useNavigate } from 'react-router-dom'
import { AuthActionData, AuthStatus } from '@/actions'
import { useAuth } from '@/firebase'
import { COMMON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from '@/routing'
import { ROLES } from '@/types'
import styles from './Auth.module.scss'

const Auth = () => {
	const actionData = useActionData() as AuthActionData | undefined
	const { role } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (actionData?.status === AuthStatus.Success && Object.values(ROLES).includes(role!)) {
			if (role && role === ROLES.ADMIN) {
				navigate(ADMIN_ROUTES_NAMES.USERS)
			} else {
				navigate(COMMON_ROUTES_NAMES.ORDERS)
			}
		}
	}, [actionData?.status, role, navigate])

	return (
		<section className={styles.authorization}>
			{actionData?.status === 'error' && <p className={styles.errorMessage}>{actionData.message}</p>}
			<Form
				className={styles.form}
				action={COMMON_ROUTES_NAMES.AUTH}
				method="post"
			>
				<label className={styles.formLabel}>
					<input
						className={styles.formField}
						type="email"
						name="email"
						placeholder="User name"
						required
					/>
				</label>
				<label>
					<input
						className={styles.formField}
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</label>
				<button
					className={styles.formBtn}
					type="submit"
				>
					Submit
				</button>
			</Form>
		</section>
	)
}

export default Auth
