import { Link } from 'react-router-dom'
import { COMMON_ROUTES_NAMES } from '@/routing'

const Navigation = () => {
	return (
		<nav>
			{Object.values(COMMON_ROUTES_NAMES).map((url, ind) => (
				<Link
					key={`${url}--${ind}`}
					to={url}
				/>
			))}
		</nav>
	)
}

export default Navigation
