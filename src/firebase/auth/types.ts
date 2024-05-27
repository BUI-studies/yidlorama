import { ROLES } from '@/types'
import { User } from 'firebase/auth'

export interface IAuthProps {
	email: string
	password: string
}

export interface INewUserProps extends IAuthProps {
	firstName: string
	lastName: string
	role: ROLES
}

export type Auth = {
	user: User | null
	role: ROLES | undefined
}
