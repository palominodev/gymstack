import { SearchItem } from "./SearchItem"

export const UserAttendance = () => {
  return (
    <article>
      <form>
        <label htmlFor="search">Buscar Usuario</label>
        <input type="text" name="search" id="search" />
      </form>
      <section>
        <SearchItem suscription={'PRO'} name={"Jeremy Scott Palomino Fernandez"} />
      </section>
    </article>
  )
}