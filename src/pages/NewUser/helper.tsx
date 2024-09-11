import { FormProps, METHOD } from '@/components/UniversalForm/types.tsx'
import { ActionFunctionArgs, redirect } from 'react-router-dom'
import { addUserToCollection } from '@/firebase/firestore'
import { auth, createNewUser } from '@/firebase/auth'
import { INewUserProps } from '@/firebase/auth/types'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'
import { INPUT_TYPE } from '@/components/Input/type.tsx'
import { ROLES } from '@/types'

export type NewUserProps = {
	name: FormDataEntryValue | null
	email?: FormDataEntryValue | null
	password?: FormDataEntryValue | null
	role: FormDataEntryValue | null
}

export const newUserFormProps: FormProps = {
	title: '',
	method: METHOD.POST,
	inputs: [
		{
			id: '01',
			type: INPUT_TYPE.TEXT,
			placeHolder: 'First name',
			value: '',
			name: 'first name',
			required: true,
			label: 'First name',
		},
		{
			id: '02',
			type: INPUT_TYPE.TEXT,
			placeHolder: 'Last name',
			value: '',
			name: 'last name',
			required: true,
			label: 'Last name',
		},
		{
			id: '03',
			type: INPUT_TYPE.EMAIL,
			placeHolder: 'Enter email',
			value: '',
			name: 'email',
			required: true,
			label: 'Email',
		},
		{
			id: '04',
			type: INPUT_TYPE.PASSWORD,
			placeHolder: 'Enter password',
			value: '',
			name: 'password',
			required: true,
			label: 'Password',
		},
		{
			id: '05',
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
					value: 'garson',
					label: 'Garson',
				},
			],
		},
	],
	button: {
		text: 'Create',
	},
}

export const addNewUser = async ({ request }: ActionFunctionArgs) => {
	let formData = await request.formData()
	const userId = `${new Date().getTime().toString().split('').reverse().splice(0, 8).join('')}`

	const newUserData: INewUserProps = {
		firstName: formData.get('first name'),
		lastName: formData.get('last name'),
		email: formData.get('email'),
		password: formData.get('password'),
		role: formData.get('role') as ROLES,
		id: userId,
	}
	await createNewUser(newUserData)
	if (auth.currentUser) {
		newUserData.uid = auth.currentUser.uid
	}
	await addUserToCollection(newUserData)
	return redirect(ADMIN_ROUTES_NAMES.USERS)
}
