import { Link } from 'react-router-dom'
import { COMMON_ROUTES_NAMES } from '@/routing'
import Navigation from './Navigation'
import logoPath from '@/assets/logo.svg'
import classes from './Header.module.scss'

const Header = () => {
	return (
		<header>
			<div className={classes.headerContainer}>
				<Link
					className={classes.headerLogo}
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
