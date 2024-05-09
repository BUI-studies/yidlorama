import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	deleteUser,
	signOut,
	User,
} from 'firebase/auth'
import { app } from '../main'
import { IAuthProps, INewUserProps } from './types'

export const auth = getAuth(app)

/**
 * Function creates a new user and automatically signs in with new user credentials.
 *
 * @param {string} email - new user's e-mail;
 * @param {string} password - new user's password;
 * @param {string} firstName - new user's first name;
 * @param {string} lastName - new user's last name;
 */
export const createNewUser = async ({ email, password, firstName, lastName }: INewUserProps): Promise<void> => {
	try {
		const newUser = await createUserWithEmailAndPassword(auth, email, password)

		updateProfile(newUser.user, {
			displayName: `${firstName} ${lastName}`,
		})
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}

/**
 *
 * @returns current user object instance;
 */
export const getCurrentUser = (): User | null => {
	return auth.currentUser
}

/**
 * Function signs in using existing user credentials.
 *
 * @param {string} email - existing user e-mail;
 * @param {string} password - existing user password;
 */
export const logIn = async ({ email, password }: IAuthProps): Promise<void> => {
	try {
		await signInWithEmailAndPassword(auth, email, password)
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}

/**
 * Function deletes current user account.
 */
export const deleteCurrentUser = async (): Promise<void> => {
	if (auth.currentUser) {
		try {
			await deleteUser(auth.currentUser)
		} catch (error) {
			throw new Error(`AN ERROR OCCURED: ${error}`)
		}
	} else throw new Error(`AN ERROR OCCURED: current user is null`)
}

/**
 * Function signs out current user.
 */
export const logOut = async (): Promise<void> => {
	try {
		await signOut(auth)
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}
