import { CardInfo } from "../components/CardInfo"
import { UserAttendance } from "../components/UserAttendance"

export const Admin = () => {
  return (
	<main>
    <section >
      <CardInfo num={34} text={'Usuario'} />
      {/* <CardInfo num={5} text={'Instructores'} /> */}
      <CardInfo num={3} text={'Planes'} /> 
    </section>
    <section>
      {/* TODO: Mostrar la ganancias en un nuevo componente */}
      {/* <AccountMoneyCard /> */}

      <UserAttendance />
    </section>
  </main>
  )
}