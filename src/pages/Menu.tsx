import { UniversalTable } from "@/components"

const Menu = () => {
	return (
	<>
		<h2>Menu</h2>
		
		<UniversalTable
			data={[
				{ id: 1, name: 'Pizza', price: 10 },
				{ id: 2, name: 'Burger', price: 5 },
				{ id: 3, name: 'Coke', price: 2 },
			]}
			headers={[
				{ title: 'ID', property: 'id' },
				{ title: 'Name', property: 'name' },
				{ title: 'Price', property: 'price' },
			]}/>
	</>)

}

export default Menu
