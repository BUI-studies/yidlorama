import { UniversalTable, AddButton } from "@/components"
import { UsersLoaderData, User } from "./types"
import classes from './Users.module.scss'
import { useLoaderData } from 'react-router-dom'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'
import { Outlet } from 'react-router-dom'



export function mockUsersData() {
  return new Promise(resolve => setTimeout(() => {
		const header = 'Users';
		const tableData={
			headers: [
			{ title: 'Name', property: 'name' },
			{ title: 'Email', property: 'email' },
			{ title: 'Password', property: 'password' },
			{ title: 'Role', property: 'role' },
		],
    data: [
      { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', role: 'admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password456', role: 'user' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com', password: 'password789', role: 'user' },
    ],
	}
    resolve({header, tableData});
  }, 1000));
}

const Users = () => {
	const { header, tableData } = useLoaderData() as UsersLoaderData<User>
	return (
		<>
			<Outlet />
			<div className={classes.usersPage}>
				<div className={classes.usersPageOptions}>
					<AddButton type='link' to={ADMIN_ROUTES_NAMES.NEW_USER}/>
					<h2 className={classes.usersPageOptionsHeader}>{header}</h2>
				</div>
				<UniversalTable data={tableData.data} headers={tableData.headers}/>
			</div>
		</>
	)
	
}

export default Users

