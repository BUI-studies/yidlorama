import { INPUT_TYPE } from '@/components/Input/type'
import { METHOD, FormProps } from '@/components/UniversalForm/types'
import { COMMON_ROUTES_NAMES } from '@/routing/routes.names'

export const authForm: FormProps = {
	title: 'Login',
	action: COMMON_ROUTES_NAMES.AUTH,
	method: METHOD.POST,
	inputs: [
		{
			name: 'email',
			type: INPUT_TYPE.EMAIL,
			placeHolder: 'User name',
			required: true,
			id: '01',
		},
		{
			name: 'password',
			type: INPUT_TYPE.PASSWORD,
			placeHolder: 'Password',
			required: true,
			id: '02',
		},
	],
	button: {
		text: 'Submit',
	},
}
