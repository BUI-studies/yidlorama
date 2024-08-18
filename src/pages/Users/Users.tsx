import { Outlet, useLoaderData } from 'react-router-dom'
import { UniversalTable, AddButton } from '@/components'
import { mapDataUserPage, UserData } from './helper'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'
import classes from './Users.module.scss'

const Users = () => {
	const usersDataResponse = useLoaderData() as UserData[]
	console.log(usersDataResponse)
	const tableData = mapDataUserPage(usersDataResponse)

	return (
		<>
			<Outlet />
			<div className={classes.usersPage}>
				<div className={classes.usersPageOptions}>
					<AddButton
						type="link"
						to={ADMIN_ROUTES_NAMES.NEW_USER}
						action={() => {}}
					/>
					<h2 className={classes.usersPageOptionsHeader}>{tableData.header}</h2>
				</div>
				<UniversalTable
					data={tableData.data.data}
					headers={tableData.data.headers}
				/>
			</div>
		</>
	)
}

export default Users
