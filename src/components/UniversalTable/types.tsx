export interface BaseData {
	id: string | number
}

export type UniversalTableProps<D> = {
	headers: {
		title: string
		property: keyof D
	}[]

	data: D[]
}
