import { CardInfo } from "../components/CardInfo"
import { PlanCardInfo } from "../components/PlanCardInfo"
import { UserAttendance } from "../components/UserAttendance"
import { UserCardInfo } from "../components/UserCardInfo"

export const Admin = () => {
  return (
	<main className="px-4 pt-6 bg-stone-800">
    <section className="flex gap-2" >
      <UserCardInfo />
      {/* <CardInfo num={5} text={'Instructores'} /> */}
      <PlanCardInfo />
    </section>
    <section>
      {/* TODO: Mostrar la ganancias en un nuevo componente */}
      {/* <AccountMoneyCard /> */}

      <UserAttendance />
    </section>
  </main>
  )
}