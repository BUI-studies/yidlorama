import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../auth"
import { app } from '../main'
import { UserRoleData } from './types'
import { NewUserProps } from '@/pages/NewUser/helper'

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

/**
 * Function gets user role data from firestore according to user's uid.
 *
 * @param {string} uid - current user's uid;
 * @returns a current user's role in the system.
 */
export const getUserRoleData = async (uid: string | undefined): Promise<string | undefined> => {
	let currentUserRole
	const q = query(collection(db, 'users'), where('uid', '==', uid))
	try {
		const querySnapshot = await getDocs(q)
		querySnapshot.forEach(doc => {
			const data = doc.data()
			currentUserRole = data.role
		})
		return currentUserRole
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}

/**
 * Function creates a new document in "users" collection where sets all new user's data;
 *
 * @param {ROLES} role - new user's role in the system (admin or garson);
 * @param {string} uid - new user's uid;
 */
export const createNewUser = async (userData: NewUserProps): Promise<void> => {
	try {
		await addDoc(collection(db, 'users'), { role: userData.role, name: userData.name, uid: auth.currentUser?.uid })
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}

/**
 * Function creates a new user via EMAIL and PASSWORD;
 *
 * @param {userData} role - object with new user's data;
 */

export const createNewUserWittEmailAndPassword = async (userData: NewUserProps): Promise<void> => {
	createUserWithEmailAndPassword(auth, userData.email as string, userData.password as string)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
