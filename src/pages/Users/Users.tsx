import { UniversalTable, AddButton } from '@/components'
import { UsersLoaderData, User } from './types'
import { FittingDataUserPage } from './helper'
import classes from './Users.module.scss'
import { useLoaderData } from 'react-router-dom'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'
import { Outlet } from 'react-router-dom'

const Users = () => {
	const usersDataResponse = useLoaderData() as UsersLoaderData<User>
	const tableData = FittingDataUserPage(usersDataResponse)

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
