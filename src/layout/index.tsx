import { FC } from 'react'
import { Outlet, useNavigation  } from 'react-router-dom'
import { Loader } from '../components'
import Header from './Header/Header'
import Footer from './Footer'

import './index.scss'

const Root: FC = () => {
	const { state } = useNavigation();
	return (
		<>
			<Header />
			<main>
			{state === 'loading' ? <Loader/> : null}
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Root
