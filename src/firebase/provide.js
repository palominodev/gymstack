import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseAuth } from './config'

export const signInWithEmail = async ({ email, password }) => {
	try {
		const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
		const { user } = result

		return {
			ok: true,
			...user,
		}
	} catch (error) {
		const errorMessage = error.message
		const errorCode = error.code
		return {
			ok: false,
			errorMessage,
			errorCode
		}
	}
}