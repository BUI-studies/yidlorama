import { FC, useState, useEffect } from 'react'
import { ActionFunctionArgs, redirect, useNavigate } from 'react-router-dom'
import { createNewUser, createNewUserWittEmailAndPassword } from '@/firebase/firestore'
import { UniversalForm, UniversalModal } from '@/components'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'

import { NewUserProps, newUserFormProps } from './helper'

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

	const handleClose = (newIsOpen: boolean) => {
		if (!newIsOpen) {
			navigate(ADMIN_ROUTES_NAMES.USERS)
		}
		setOpen(newIsOpen)
	}

	newUserFormProps.button.clickHandler = () => {
		setOpen(false)
	}

	return (
		<UniversalModal
			children={<UniversalForm data={newUserFormProps} />}
			title={'Create New User nahui'}
			visible={isOpen}
			setVisible={handleClose}
		/>
	)
}

export default NewUser
