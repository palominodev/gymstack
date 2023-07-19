import { addDoc, collection, getDocs } from "firebase/firestore"
import { FirebaseDB } from "../firebase/config"

export const getUsers = async(uid) => {
	const users = []
	const querySnapshot = await getDocs(collection(FirebaseDB,`gymlocals/${uid}/clients`));
	querySnapshot.forEach((doc) => {
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