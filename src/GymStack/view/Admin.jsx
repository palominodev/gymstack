import { PlanCardInfo } from "../components/PlanCardInfo"
import { UserAttendance } from "../components/UserAttendance"
import { UserCardInfo } from "../components/UserCardInfo"

export const Admin = () => {
  return (
	<main className="px-4 pt-6 bg-stone-800 h-screen">
    <section className="flex gap-2" >
      <UserCardInfo />
      <PlanCardInfo />
    </section>
    <section className="flex justify-end mt-6">
      {/* TODO: Mostrar la ganancias en un nuevo componente */}
      {/* <AccountMoneyCard /> */}

      <UserAttendance />
    </section>
  </main>
  )
}