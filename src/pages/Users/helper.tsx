import { ROLES } from '@/types'

export type UserData = {
	id: string | number
	role: ROLES
	name: string
	uid: string
}

export const mapDataUserPage = (array: UserData[]) => {
	return {
		title: 'Users',

		headers: Object.keys(array[0] || {}).map(key => {
			const title = key.split('')
			title[0] = title[0].toUpperCase()
			const header = {
				title: title.join(''),
				property: key as keyof UserData,
			}
			return header
		}),

		users: array,
	}
}
