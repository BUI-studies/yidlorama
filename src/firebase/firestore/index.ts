import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { app } from '../main'
import { UserRoleData } from './types'

const db = getFirestore(app)

/**
 * Function creates a new document in "users" collection where sets a new user's role and uid;
 *
 * @param {ROLES} role - new user's role in the system (admin or garson);
 * @param {string} uid - new user's uid;
 */
export const setNewUserRoleData = async ({ role, uid }: UserRoleData): Promise<void> => {
	try {
		await addDoc(collection(db, 'users'), { role: role, uid: uid })
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}
