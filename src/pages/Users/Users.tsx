import { UniversalTable, AddButton } from "@/components"
import { UsersLoaderData, User } from "./types"
import classes from './Users.module.scss'
import { useLoaderData } from 'react-router-dom'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'

const Users = () => {
	const { header, tableData } = useLoaderData() as UsersLoaderData<User>
	return (
		<>
			<div className={classes.usersPage}>
				<div className={classes.usersPageOptions}>
					<AddButton action={()=>console.log('Кніпка натиснена')} type='link' url={ADMIN_ROUTES_NAMES.NEW_USER}/>
					<h2 className={classes.usersPageOptionsHeader}>{header}</h2>
				</div>
				<UniversalTable data={tableData.data} headers={tableData.headers}/>
			</div>
		</>
	)
	
}

export default Users

