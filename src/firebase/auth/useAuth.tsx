import { useState } from 'react'
import { getCurrentUser, auth } from './index'
import { User, onAuthStateChanged } from 'firebase/auth'

const useAuth = () => {
	const [currentUser, setCurrentUser] = useState<User | null>(null)
	
	useEffect(() => {
	  setCurrentUser(getCurrentUser())
	},[])
	onAuthStateChanged(auth, user => setCurrentUser(user))
	return { currentUser }
}

export default useAuth
