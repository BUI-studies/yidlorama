import { Link } from 'react-router-dom'
import { COMMON_ROUTES_NAMES } from '@/routing'
import Navigation from './Navigation'

const Header = () => {
	
	return (
		<header className="nav">
			<div className="container">
		  		<Link className="nav__logo" to={COMMON_ROUTES_NAMES.HOME}>
		  			Ї-dlorama
		  		</Link>

		  		<Navigation />

				<div className="nav__auth">
					<Link className="nav__auth-login" to = {COMMON_ROUTES_NAMES.AUTH}>
			  			Log in
					</Link>
				</div>
		  	</div>
	  	</header>
	)
}

export default Header
