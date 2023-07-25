import { isAfter } from "date-fns";

export const isDeprecated = (vence) => {
	const fechaActual = new Date()
	const vencimiento = Date.parse(vence)
	return isAfter(fechaActual, vencimiento)
}