import { Link } from 'react-router-dom'
import { COMMON_ROUTES_NAMES } from '@/routing'
import Navigation from './Navigation'
import logoPath from '@/assets/logo.svg'

const Header = () => {
	return (
		<header className="nav">
			<div className="container">
				<Link
					className="nav__logo"
					to={COMMON_ROUTES_NAMES.HOME}
				>
					<picture>
						<img
							src={logoPath}
							alt="Їdlorama"
						/>
					</picture>
				</Link>

				<Navigation />
			</div>
		</header>
	)
}

export default Header
