import { useState, useEffect } from 'react'
import { Card, AddButton } from '@/components'
import { DishGroup } from '@/types'
import classes from './Menu.module.scss'

const Menu = () => {
	const [dishGroups, setDishGroups] = useState([])
    useEffect (() => {
        fetch('./dishGroups.json').then(res => res.json()).then(data => {
            setDishGroups(data)
        })
    },[])
	
	return (
	<>
		<div className={classes.menu}>
			<div className={classes.menuHeader}>
				<AddButton action={() => console.log('Button was clicked')}/>
				<h2 className={classes.menuHeaderTitle}>Menu</h2>
			</div>
			<div className={classes.menuList}>
				{dishGroups.map((elem: DishGroup, index) => (
                    <Card
                      key={`${elem.title}-${index}`}
                      title={elem.title}
                      data={elem.dishes}
                    />
                ))}
			</div>
		 
		</div>
	</>
	)
}

export default Menu
