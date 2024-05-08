import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Root: FC = () => {
	return (
		<>
			<header>
				<h1>Ї-dlorama</h1>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>©БУЙ studies - 2024</footer>
		</>
	)
}

export default Root
