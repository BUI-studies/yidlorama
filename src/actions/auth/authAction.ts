import { logIn } from '@/firebase'
import { AuthActionProps } from './types'
import { AUTH_STATUS } from './dto'
import { redirect } from 'react-router-dom'

export const authAction = async ({ request }: AuthActionProps) => {
	const formData = await request.formData()
	const email = formData.get('email') as string
	const password = formData.get('password') as string

	await logIn({ email, password })
	return (redirect('/'))

	// try {
	// 	await logIn({ email, password })
	// 	return { status: AUTH_STATUS.SUCCESS }
	// } catch (error) {
	// 	console.error(error)
	// 	return { status: AUTH_STATUS.ERROR, message: 'Wrong e-mail or password' }
	// }
}
