import { CardInfo } from "../components/CardInfo"

export const Admin = () => {
  return (
	<main>
    <section >
      <CardInfo num={34} text={'Usuario'} />
      <CardInfo num={5} text={'Instructores'} />
      <CardInfo num={3} text={'Servicios'} /> 
    </section>
  </main>
  )
}