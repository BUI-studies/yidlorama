import { AUTH_STATUS } from './dto'

export type AuthActionProps = {
	request: Request
}

export type AuthActionData = {
	status: null | AUTH_STATUS
	message?: string
	user?: { email: string; password?: string }
}
