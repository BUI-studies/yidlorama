import { Form } from "react-router-dom";
import { COMMON_ROUTES_NAMES } from "@/routing";

import useCurrentUser from "@/hooks/useCurrentUser";

const Auth = () => {
	const actionData = useCurrentUser();

	return (
		<section className="authorization">
			{actionData && actionData.status && <p>{actionData.message}</p>}
			<Form className="form" action={COMMON_ROUTES_NAMES.AUTH} method="post">
				<label className="form__label">
					<input className="form__field" type="email" name="email" placeholder="User name" required />
				</label>
				<label>
					<input className="form__field" type="password" name="password" placeholder="Password" required />
				</label>
				<button type="submit">Submit</button>
			</Form>
		</section>
	);
};
export default Auth;

