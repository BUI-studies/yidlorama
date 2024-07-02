import { useState, useEffect } from 'react'
import { auth } from './index'
import { onAuthStateChanged } from 'firebase/auth'
import { getUserRoleData } from '../firestore'
import { Auth } from './types'
import { ROLES } from '@/types'

const useAuth = () => {
	const [user, setUser] = useState<Auth>({ user: null, role: undefined })

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			const role = user && (await getUserRoleData(user?.uid))
			setUser({ user: user, role: role as ROLES })
		})

		return () => unsubscribe()
	}, [])

	return { user: user.user, role: user.role }
}

export default useAuth
