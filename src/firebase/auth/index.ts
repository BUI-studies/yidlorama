import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	deleteUser,
	signOut,
	User,
} from 'firebase/auth'
import { setNewUserRoleData } from '../firestore'
import { app } from '../main'
import { IAuthProps, INewUserProps } from './types'
import { ROLES } from '@/types'

export const auth = getAuth(app)

/**
 * Function creates a new user and automatically signs in with new user credentials.
 *
 * @param {string} firstName - new user's first name;
 * @param {string} lastName - new user's last name;
 * @param {ROLES} role - new user's role in the system (admin or garson);
 * @param {string} email - new user's e-mail;
 * @param {string} password - new user's password;
 */
export const createNewUser = async ({ firstName, lastName, role, email, password }: INewUserProps): Promise<void> => {
	try {
		const newUser = await createUserWithEmailAndPassword(auth, email, password)

		await updateProfile(newUser.user, {
			displayName: `${firstName} ${lastName}`,
		})

		await setNewUserRoleData({ role: role as ROLES, uid: newUser.user.uid })
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
