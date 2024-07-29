import { useState, useEffect } from 'react'
import { Form } from 'react-router-dom' 
import { Card, AddButton, UniversalModal } from '@/components'
import { DishGroup } from '@/types'
import classes from './Menu.module.scss'

const Menu = () => {
	const [dishGroups, setDishGroups] = useState([])
    useEffect (() => {
        fetch('./dishGroups.json').then(res => res.json()).then(data => {
            setDishGroups(data)
        })

		// код з async-await ПРАЦЮЄ:
		// const getDishGroups = async (): Promise<any> => {
		// 	const res = await fetch('./dishGroups.json')
		// 	const data = await res.json()
		// 	return data
		// }
		// const dishGr = getDishGroups()		
		// dishGr.then(data => {
		// setDishGroups(data)})

		// код з async-await НЕ ПРАЦЮЄ:
		// async (): Promise<void> => {
		// 	const res = await fetch('./dishGroups.json')
		// 	await res.json().then(data => {
		// 		setDishGroups(data)
		// 	})
		// }
		
    },[])
	
	const [modal, setModal] = useState(false)

	const handleClickOpenModal = () => {
		setModal(true)
	}

	const handleClickAddInput = () => {  
    	console.log('Button Add Input was clicked!')
	}

	return (
	<>
		{modal && (
        <UniversalModal title = "Create New Menu" visible = {modal} setVisible = {setModal}>
            <Form className={classes.form} method="post">
                <label className={classes.formLabel}>
                    <input className={classes.formField} type="text" name="menu title" placeholder="Menu's title" required />
                </label>
                <label>
                    <input className={classes.formField} type="text" name="name of dish" placeholder="Name of dish" required />
                </label>
				<div className={classes.formAddInput}>
					<AddButton action={handleClickAddInput}/>
					<p>Add dish</p>
				</div>
                <button className={classes.formBtn} type="submit">Add menu</button>
            </Form>
        </UniversalModal>)}

		<div className={classes.menu}>
			<div className={classes.menuHeader}>
				<AddButton action={handleClickOpenModal}/>
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
