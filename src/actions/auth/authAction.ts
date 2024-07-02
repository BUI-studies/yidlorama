import { logIn } from '@/firebase'
import { AuthActionProps } from './types'
import { AuthStatus } from './dto'

export const authAction = async ({ request }: AuthActionProps) => {
	const formData = await request.formData()
	const email = formData.get('email') as string
	const password = formData.get('password') as string

	try {
		await logIn({ email, password })
		return { status: AuthStatus.Success }
	} catch (error) {
		console.error(error)
		return { status: AuthStatus.Error, message: 'Wrong e-mail or password' }
	}
}
