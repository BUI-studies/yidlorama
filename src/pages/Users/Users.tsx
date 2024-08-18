import { Outlet, useLoaderData } from 'react-router-dom'
import { UniversalTable, AddButton } from '@/components'
import { mapDataUserPage, UserData } from './helper'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'
import classes from './Users.module.scss'

const Users = () => {
	const usersDataResponse = useLoaderData() as UserData[]
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
					<h2 className={classes.usersPageOptionsHeader}>{tableData.title}</h2>
				</div>
				{usersDataResponse.length ? (
					<UniversalTable<UserData>
						data={tableData.users}
						headers={tableData.headers}
					/>
				) : (
					<p>Дані відсутні</p>
				)}
			</div>
		</>
	)
}

export default Users
