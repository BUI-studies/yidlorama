import { BaseData } from '@/components/UniversalTable/types'

export type UserData = {
	id: string | number;
	[key: string]: any; // інші поля можуть бути будь-якими
  };

export const mapDataUserPage = (usersDataResponse: UserData[]) => {
	const tableData = {
		header: 'Users',
		data: {
			headers: Object.keys(usersDataResponse[0]).map(key => {
				const title = key.split('')
				title[0] = title[0].toUpperCase()
				const header = {
					title: title.join(''),
					property: key,
				}
				return header
			}),
			data: usersDataResponse.map(user => {
				return user
			}),
		},
	}

	return tableData
}
