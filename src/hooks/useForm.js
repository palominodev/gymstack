import { useState } from "react"

export const useForm = (initialState) => {
	const [formState, setFormState] = useState(initialState)

	const onInputChange = ({target}) => {
		const {name, value} = target
		setFormState({
			...formState,
			[name]: value,
		})
	}

	const addBeneficio = (beneficio) => {
		setFormState({
			...formState,
			ok:true,
			beneficios: beneficio
		})
	}

	const onResetForm = () => {
		setFormState({
			...initialState,
		})
	}
	const addField = () => {
		setFormState({
			...formState,
			beneficios: [...formState.beneficios,'']
		})
	}

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		addBeneficio,
		addField,
	}

}