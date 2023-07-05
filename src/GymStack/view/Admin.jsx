import { CardInfo } from "../components/CardInfo"
import { UserAttendance } from "../components/UserAttendance"
import { UserRejected } from "../components/UserRejected"

export const Admin = () => {
  return (
	<main>
    <section >
      <CardInfo num={34} text={'Usuario'} />
      <CardInfo num={5} text={'Instructores'} />
      <CardInfo num={3} text={'Servicios'} /> 
    </section>
    <section>
      <UserRejected />
      <UserAttendance />
    </section>
  </main>
  )
}