import { signInWithEmail } from "../../firebase/provide"


export const startLoginWithEmail = ({email,password}) =>{
	return async(dispatch) => {
		const result = await signInWithEmail({email,password})

		console.log(result);
	}
}