import { Link } from 'react-router-dom'
import { COMMON_ROUTES_NAMES } from '@/routing'
import { logOut, useAuth } from '@/firebase'
import { createNavMenu } from './helpers'
import classes from './Navigation.module.scss'

const Navigation = () => { 
	const { user, role } = useAuth()

	const authBtnText = user ? 'Log out' : 'Log in'

return (
	<>
		{user && (
			<nav className={classes.headerMenu}>
				{role &&
					createNavMenu(role).map(item => (
						<Link
							className={classes.headerMenuItem}
							key={item.id}
							to={item.url}
						>
							{item.title}
						</Link>
					))
				}
			</nav>
		)}
		<div>
			<Link
				className={classes.authLink}
				to={COMMON_ROUTES_NAMES.AUTH}
				onClick={() => (user ? logOut() : null)}
			>
				{authBtnText}
			</Link>
		</div>
	</>
	)
}

export default Navigation
