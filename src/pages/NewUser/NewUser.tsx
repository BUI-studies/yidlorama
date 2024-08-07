import { FC, useState, useEffect } from 'react'
import { UniversalForm, UniversalModal } from '@/components'
import { ActionFunctionArgs, redirect, useNavigate } from 'react-router-dom'
import { newUserFormProps } from './helper'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'
import { NewUserProps } from './helper'
import { createNewUser, createNewUserWittEmailAndPassword } from '@/firebase/firestore'
import classes from './NewUser.module.scss'

export const addNewUser = async ({ request }: ActionFunctionArgs) => {
	let formData = await request.formData()

	const newUserData: NewUserProps = {
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
		role: formData.get('role'),
	}
	console.log(newUserData)
	await createNewUserWittEmailAndPassword(newUserData)
	await createNewUser(newUserData)
	return redirect(ADMIN_ROUTES_NAMES.USERS)
}

const NewUser: FC = () => {
	const [isOpen, setOpen] = useState(true)
	const navigate = useNavigate()
	useEffect(() => {
		if (!isOpen) {
			navigate(ADMIN_ROUTES_NAMES.USERS)
		}
	}, [isOpen])
	return (
		<UniversalModal
			children={<UniversalForm data={newUserFormProps} />}
			title={''}
			visible={isOpen}
			setVisible={setOpen}
		/>
	)
}

export default NewUser
