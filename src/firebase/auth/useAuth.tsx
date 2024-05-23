import { useState, useEffect } from 'react'
import { getCurrentUser, auth } from './index'
import { User, onAuthStateChanged } from 'firebase/auth'
import { getUserRoleData } from '../firestore'


const useAuth = () => {
	const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser())
	const [currentUserRole, setCurrentUserRole] = useState<string | undefined>(undefined)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user)
			if (user) {
				getUserRoleData(user.uid).then(role => setCurrentUserRole(role))
			} else setCurrentUserRole(undefined)
		})

		return () => unsubscribe()
	}, [])

	console.log(currentUserRole)

	return { user: currentUser, role: currentUserRole }
}

export default useAuth;