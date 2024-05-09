import { FC } from 'react'
import { Dish } from '../types'
type NewOrderProps = {
	table: number
	order: Dish[]
	total: number
	discount?: number
}

const NewOrder: FC<NewOrderProps> = () => {
	return (
		<>
			<h1>New Order</h1>
		</>
	)
}

export default NewOrder
