import { FormProps, METHOD } from '@/components/UniversalForm/types.tsx'
import { ActionFunctionArgs, redirect } from 'react-router-dom'
import { createNewUser, createNewUserWittEmailAndPassword } from '@/firebase/firestore'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'
import { INPUT_TYPE } from '@/components/Input/type.tsx'

export type NewUserProps = {
	name: FormDataEntryValue | null
	email?: FormDataEntryValue | null
	password?: FormDataEntryValue | null
	role: FormDataEntryValue | null
}

export const newUserFormProps: FormProps = {
	title: 'New user',
	method: METHOD.POST,
	inputs: [
		{
			id: 'name',
			type: INPUT_TYPE.TEXT,
			placeHolder: 'Enter name',
			value: '',
			name: 'name',
			required: true,
			label: 'Name',
		},
		{
			id: 'email',
			type: INPUT_TYPE.EMAIL,
			placeHolder: 'Enter email',
			value: '',
			name: 'email',
			required: true,
			label: 'Email',
		},
		{
			id: 'password',
			type: INPUT_TYPE.PASSWORD,
			placeHolder: 'Enter password',
			value: '',
			name: 'password',
			required: true,
			label: 'Password',
		},
		{
			id: 'role',
			type: INPUT_TYPE.SELECT,
			placeHolder: 'Select role',
			value: '',
			name: 'role',
			required: true,
			label: 'Role',
			options: [
				{
					value: 'admin',
					label: 'Admin',
				},
				{
					value: 'user',
					label: 'User',
				},
			],
		},
	],
	button: {
		text: 'Create',
		// clickHandler: () => console.log('Create button clicked')
	},
}

export const addNewUser = async ({ request }: ActionFunctionArgs) => {
	let formData = await request.formData()

	const newUserData: NewUserProps = {
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
		role: formData.get('role'),
	}
	await createNewUserWittEmailAndPassword(newUserData)
	await createNewUser(newUserData)
	return redirect(ADMIN_ROUTES_NAMES.USERS)
}
