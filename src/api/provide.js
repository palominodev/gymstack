import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const getUsers = async(uid) => {
	const users = []
	const querySnapshot = await getDocs(collection(FirebaseDB,`gymlocals/${uid}/clients`));
	querySnapshot.forEach(doc => {
		users.push({
			uid: doc.id,
			...doc.data()
		})
	});
	return users
}

export const saveUser = async({user,uid}) => {
	await setDoc(doc(FirebaseDB, `gymlocals/${uid}/clients`, user.uid), user)
}

export const getPlans = async(uid) => {
	const plans = []
	const querySnapshot = await getDocs(collection(FirebaseDB,`gymlocals/${uid}/plans`));
	querySnapshot.forEach(doc => {
		plans.push({
			id: doc.id,
			...doc.data()
		})
	})
	return plans
}

export const savePlan = async({plan,uid}) => {
	await setDoc(doc(FirebaseDB, `gymlocals/${uid}/plans`, plan.id), plan)
}

export const deletePlan = async({uid,id}) => {
	await deleteDoc(doc(FirebaseDB, `gymlocals/${uid}/plans`, id))
}

export const deleteUser = async({uid,id}) => {
	await deleteDoc(doc(FirebaseDB, `gymlocals/${uid}/clients`, id))
}