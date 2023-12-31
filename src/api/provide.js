import { arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"
import { isAfter } from "date-fns";
import { lunesPasadoMasProximo } from "./helpers/isMonday";
import { registerToday } from "./helpers/registerToday";
import { isDeprecated } from "../GymStack/helpers/isDeprecated";

export const getUsers = async(uid) => {
	const users = []
	const lunesPasado = lunesPasadoMasProximo()
	const querySnapshot = await getDocs(collection(FirebaseDB,`gymlocals/${uid}/clients`));
	querySnapshot.forEach(doc => {
		const asistencias = doc.data().asistencias?.filter(item => (
			isAfter(new Date(item), lunesPasado)
		))
		const complete_days = asistencias?.length || 0

		let status = 'valid'
		if(complete_days === doc.data().total_days ){
			status = 'full'
		}
		if(isDeprecated(doc.data().vence)){
			status = 'deprecated'
		}

		users.push({
			...doc.data(),
			status: status,
			uid: doc.id,
			asistencias: asistencias || [],
			complete_days: complete_days
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

export const editUser = async({uid,user}) => {
	await updateDoc(doc(FirebaseDB, `gymlocals/${uid}/clients`, user.uid), user)
}

export const addCounterDays = async({uid,id}) => {
	const docRef = doc(FirebaseDB, `gymlocals/${uid}/clients`, id)
	const snapshot = await getDoc(docRef)
	const registerSameDay = registerToday({asistencias: snapshot.data().asistencias})
	if(registerSameDay.ok) {
		await updateDoc(docRef, {
			asistencias: arrayUnion(new Date().toString())
		})
	}
	return registerSameDay
}

export const updateSuscription = async({uid,id,vence,name}) => {
	const docRef = doc(FirebaseDB, `gymlocals/${uid}/clients`, id)
	await updateDoc(docRef, {
		vence,
		type: name
	})
}