import { Link, NavLink } from 'react-router-dom'
import { COMMON_ROUTES_NAMES } from '@/routing'
import { logOut, logIn, useAuth } from '@/firebase'
import { createNavMenu } from './helpers'

const Navigation = () => {
	const { user, role } = useAuth()

	return (
		<>
			{user && (
				<nav className="nav__menu">
					{role &&
						createNavMenu(role).map(item => (
							<Link
								className="nav__menu-item"
								key={item.id}
								to={item.url}
							>
								{item.title}
							</Link>
						))}
				</nav>
			)}
			<div className="nav__auth">
				{!user && (
					<NavLink
						className="nav__auth-link"
						to={COMMON_ROUTES_NAMES.AUTH}
						onClick={() => logIn({ email: 'test-admin@gogi.com', password: '!Goga-but-Gogi!' })}
					>
						Log in
					</NavLink>
				)}
				{user && (
					<NavLink
						className="nav__auth-link"
						to={COMMON_ROUTES_NAMES.AUTH}
						onClick={() => logOut()}
					>
						Log out
					</NavLink>
				)}
			</div>
		</>
	)
}

export default Navigation
