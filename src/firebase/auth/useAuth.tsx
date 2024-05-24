import { useState, useEffect } from 'react'
import { getCurrentUser, auth } from './index'
import { User, onAuthStateChanged } from 'firebase/auth'
import { getUserRoleData } from '../firestore'

const useAuth = () => {
	const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser())

	const currentUserRole = currentUser && getUserRoleData(currentUser?.uid)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user))

		return () => unsubscribe()
	}, [])

	return { user: currentUser, role: currentUserRole }
}

export default useAuth