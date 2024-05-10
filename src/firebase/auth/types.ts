import { ROLES } from '@/types'

export interface IAuthProps {
	email: string
	password: string
}

export interface INewUserProps extends IAuthProps {
	firstName: string
	lastName: string
	role: ROLES
}
