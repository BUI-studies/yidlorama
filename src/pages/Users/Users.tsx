import { FC } from 'react'
import { UniversalTable, AddButton } from "@/components"
import { UsersPageProps, User } from "./types"
import classes from './Users.module.scss'
import { useLoaderData } from 'react-router-dom'  

export const getUsersData = async () => {
	return new Promise((resolve) => {
			setTimeout(() => {
					resolve({
							header: 'Користувачі',
							tableData: {
									data: [
											{ id: 1, fullName: "Alice", role: 'garson', password: '4379w8lshfjd' },
											{ id: 2, fullName: "Bob", role: 'garson', password: '4379w8lshfjd' },
											{ id: 3, fullName: "Buratino", role: 'garson', password: '4379w8lshfjd' },
											{ id: 4, fullName: "Malvina", role: 'garson', password: '4379w8lshfjd' },
											{ id: 5, fullName: "P`ero", role: 'garson', password: '4379w8lshfjd' },
											{ id: 6, fullName: "Karabas", role: 'admin', password: '4379w8lshfjd' },
									],
									headers: [
											{ title: "FullName", property: 'fullName' },
											{ title: "Role", property: "role" },
											{ title: "Password", property: "password" },
									],
							}
					});
			}, 1000);
	});
};

console.log(await getUsersData())

const Users = () => {
	const { header, tableData } = useLoaderData() as UsersPageProps<User>
	return (
		<>
			<div className={classes.usersPage}>
				<div className={classes.usersPageOptions}>
					<AddButton action={()=>console.log('Кніпка натиснена')}/>
					<h2 className={classes.usersPageOptionsHeader}>{header}</h2>
				</div>
				<UniversalTable data={tableData.data} headers={tableData.headers}/>
			</div>
		</>
	)
	
}

export default Users

