import { ROLES } from '@/types'
import { User } from 'firebase/auth'

export interface IAuthProps {
	email: string
	password: string
}

export interface INewUserProps extends IAuthProps {
	firstName: string | FormDataEntryValue | null
	lastName: string | FormDataEntryValue | null
	role: ROLES | FormDataEntryValue | null
	id?: string,
	uid?: string
}

export type Auth = {
	user: User | null
	role: ROLES | undefined
}
