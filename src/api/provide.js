import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"
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
	console.log(users)
	return users
}

export const saveUser = async({user,uid}) => {

	const docRef = await addDoc(collection(FirebaseDB,`gymlocals/${uid}/clients`), user)
	console.log(`usuario guardado en DB: ${docRef.id}`);
}

export const getPlans = async(uid) => {
	const plans = []
	const querySnapshot = await getDocs(collection(FirebaseDB,`gymlocals/${uid}/plans`));
	console.log(`gymlocals/${uid}/plans`)
	querySnapshot.forEach(doc => {
		plans.push({
			id: doc.id,
			...doc.data()
		})
	})
	console.log(plans)
	return plans
}

export const savePlan = async({plan,uid}) => {
	// const docRef = await addDoc(collection(FirebaseDB,`gymlocals/${uid}/plans`), plan)
	await setDoc(doc(FirebaseDB, `gymlocals/${uid}/plans`, plan.id), plan)
	// console.log(`plan guardado en DB: ${docRef.id}`);
}

export const deletePlan = async({uid,id}) => {
	await deleteDoc(doc(FirebaseDB, `gymlocals/${uid}/plans`, id))
	console.log('Plan eliminado');
}