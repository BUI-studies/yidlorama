import { useActionData, Form, useNavigate } from "react-router-dom";
import { COMMON_ROUTES_NAMES, ADMIN_ROUTES_NAMES } from "@/routing";
import { AuthActionData } from '@/actions'
import styles from './Auth.module.scss';
import { useAuth } from "@/firebase";
import { AuthStatus } from "@/actions/actionsAuth";
import { ROLES } from "@/types";
import { useEffect } from "react";

const Auth = () => {
	const actionData = useActionData() as AuthActionData | undefined;
	console.log(actionData);
	const { role } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (actionData?.status === AuthStatus.Success && role) {
			switch (role) {
				case ROLES.GARSON:
					navigate(COMMON_ROUTES_NAMES.ORDERS);
					break;
				case ROLES.ADMIN:
					navigate(ADMIN_ROUTES_NAMES.USERS);
					break;
				default:
					console.error('Unknown role');
			}
		}
	}, [actionData?.status, role, navigate])

	return (
		<section className={styles.authorization}>
			{actionData?.status === 'error' && (
				<p className={styles.errorMessage}>{actionData.message}</p>
			)}
			<Form className={styles.form} action={COMMON_ROUTES_NAMES.AUTH} method="post">
				<label className={styles.formLabel}>
					<input className={styles.formField} type="email" name="email" placeholder="User name" required />
				</label>
				<label>
					<input className={styles.formField} type="password" name="password" placeholder="Password" required />
				</label>
				<button className={styles.formBtn} type="submit">Submit</button>
			</Form>
		</section >
	);
};

export default Auth;

