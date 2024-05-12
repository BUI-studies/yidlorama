import { useState, useEffect } from 'react'
import { getCurrentUser, auth } from './index'
import { User, onAuthStateChanged } from 'firebase/auth'

const useAuth = () => {
	const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser())

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user))

		return () => unsubscribe()
	}, [])

	return currentUser
}

export default useAuth
