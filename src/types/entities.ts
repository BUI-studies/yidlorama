export type Dish = {
	name: string
	price: number
	description: string
	quantity: number
}

export type DishGroup = {
	name: string
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
