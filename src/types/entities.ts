export type Dish = {
	name: string
	price: number
	description: string
	quantity: number
	id: number
}

export type DishGroup = {
	title: string
	description?: string
	dishes: Dish[]
}

export type Order = {
	total: number
	discount?: number
	dishes: Dish[]
}

export type Table = {
	number: number
	guests: number
	location: string
	orders: Order[]
}
