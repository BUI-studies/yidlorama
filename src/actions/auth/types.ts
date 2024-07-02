import { AuthStatus } from './dto'

export type AuthActionProps = {
	request: Request
}

export type AuthActionData = {
	status: null | AuthStatus
	message?: string
	user?: { email: string; password?: string }
}

export type LoginError = {
	error: string
	message?: string
}
