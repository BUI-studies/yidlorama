import { Form } from "react-router-dom";
import useCurrentUser from "@/hooks/useCurrentUser";
import { COMMON_ROUTES_NAMES } from "@/routing";
import { IUserData } from "@/actions/actionsAuth";
import styles from './Auth.module.scss';

const Auth = () => {
	const userData = useCurrentUser() as IUserData;

	return (
		<section className={styles.authorization}>
			{userData && userData.status && <p className={styles.error}>{userData.message}</p>}
			<Form className={styles.form} action={COMMON_ROUTES_NAMES.AUTH} method="post">
				<label className={styles.formLabel}>
					<input className={styles.formField} type="email" name="email" placeholder="User name" required />
				</label>
				<label>
					<input className={styles.formField} type="password" name="password" placeholder="Password" required />
				</label>
				<button className={styles.formBtn} type="submit">Submit</button>
			</Form>
		</section>
	);
};

export default Auth;

