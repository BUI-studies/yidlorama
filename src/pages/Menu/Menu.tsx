import { Card, AddButton } from '@/components'
import { useLoaderData } from 'react-router-dom'
import { DishGroup } from '@/types'
import classes from './Menu.module.scss'


const Menu = () => {
	const dishGroups = useLoaderData() as DishGroup[] || {}
	
	return (
	<>
		<div className={classes.menu}>
			<div className={classes.menuHeader}>
				<AddButton action={() => console.log('Button was clicked')}/>
				<h2 className={classes.menuHeaderTitle}>Menu</h2>
			</div>
			{dishGroups ? (
				<div className={classes.menuList}>
					
					{dishGroups.map((elem: DishGroup, index: number) => (
                    	<Card
                      	key={`${elem.title}-${index}`}
                      	title={elem.title}
                      	data={elem.dishes}
                    	/>
                	))}
				</div>
			) : (
				<p>Дані відсутні</p>
			)}
		 
		</div>
	</>
	)
}

export default Menu
