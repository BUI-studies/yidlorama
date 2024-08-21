import { getFirestore, addDoc, collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../auth/index'
import { app } from '../main'
import { UserRoleData } from './types'
import { NewUserProps } from '@/pages/NewUser/helper'
import { INewUserProps } from '@/firebase/auth/types'

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

// export const getUserRoleData = async (uid: string | undefined): Promise<string | undefined> => {
// 	let currentUserRole
// 	const docRef = doc(collection(db, 'users'), auth.currentUser?.uid)
// 	const docSnap = await getDoc(docRef)
// 	const docData = docSnap.data();
// 	console.log(auth.currentUser?.uid);
// 	console.log(docData);
// 	currentUserRole = docData?.role
// 	return currentUserRole
// }

export const createNewUserWittEmailAndPassword = async (userData: NewUserProps): Promise<void> => {
	createUserWithEmailAndPassword(auth, userData.email as string, userData.password as string)
		.then(userCredential => {
			// Signed up
			if (userCredential) {
				console.log('New user has sucsessfully created, you signed up as ' + userCredential)
			}
			// ...
		})
		.catch(error => {
			throw new Error(`AN ERROR OCCURED: ${error}`)
		})
}

export const addUserToCollection = async (userData: INewUserProps): Promise<void> => {
	try {
		await addDoc(collection(db, 'users'), userData)
	} catch (error) {
		throw new Error(`AN ERROR OCCURED: ${error}`)
	}
}

export const getUsersData = async () => {
	const usersCollection = collection(db, 'users')
	const usersSnapshot = await getDocs(usersCollection)
	const usersData = usersSnapshot.docs.map(doc => doc.data())
	return usersData
}
