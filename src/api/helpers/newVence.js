import { addMonths } from "date-fns"

export const newVence = ({months, vence}) => {
	return (addMonths(Date.parse(vence), months)).toString()
}