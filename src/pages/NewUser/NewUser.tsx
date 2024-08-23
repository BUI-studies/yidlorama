import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UniversalForm, UniversalModal } from '@/components'
import { ADMIN_ROUTES_NAMES } from '@/routing/routes.names'

import { newUserFormProps } from './helper'

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
			title={''}
			visible={isOpen}
			setVisible={handleClose}
		>
			<UniversalForm data={newUserFormProps} />
		</UniversalModal>
	)
}

export default NewUser
