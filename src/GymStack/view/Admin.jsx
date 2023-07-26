import { PlanCardInfo } from "../components/PlanCardInfo"
import { UserAttendance } from "../components/UserAttendance"
import { UserCardInfo } from "../components/UserCardInfo"
import { useEffect } from "react"
import { startGetPlans } from "../../store/gymstack/thunks"
import { useDispatch, useSelector } from "react-redux"
import { setActiveUsers, setCountPlans } from "../../store/gymstack/gymstackSlice"

export const Admin = () => {

  const {planes} = useSelector(state => state.gymStack)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCountPlans())
    dispatch(setActiveUsers())
  }, [])
  
  useEffect(() => {
    if(planes.length === 0){
      dispatch(startGetPlans())
		}
	},[])

  return (
	<main className="px-4 pt-6 pb-4">
    <section className="flex gap-2 justify-center" >
      <article className="flex gap-2 w-full sm:w-3/4">
        <UserCardInfo />
        <PlanCardInfo />
      </article>
    </section>
    <section className="flex justify-end mt-2">
      {/* TODO: Mostrar la ganancias en un nuevo componente */}
      {/* <AccountMoneyCard /> */}

      <UserAttendance />
    </section>
  </main>
  )
}