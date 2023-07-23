import { format } from "date-fns"

export const stringToDate = (date) => {
  return format(Date.parse(date), 'dd/MM/yy')
}