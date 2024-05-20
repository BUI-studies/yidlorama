import { Link } from 'react-router-dom'
import { useAuth } from '@/firebase'
import { createNavMenu } from './helpers'

const Navigation = () => {
	const currentUser = useAuth()
	// console.log(currentUser);
	const user = currentUser?.user;
	const role = currentUser?.role
	
	// const user = true
	// const role = 'admin'

	const navigationMenu = createNavMenu(role)
	
	return (
		<>
		{user && (
			<nav className="nav__menu">
				{navigationMenu.map((item) => (
					<Link className='nav__menu-item'
						key={item.id}
						to={item.url}
					>{item.title}</Link>
				))}
			</nav>
		)}
		</>
	)
}

export default Navigation
