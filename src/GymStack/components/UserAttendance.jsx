import { useDispatch, useSelector } from "react-redux"
import { searchUsersByName } from "../../store/gymstack/gymstackSlice"
import { SearchContainer } from "./SearchContainer"
import { useRef } from "react"

export const UserAttendance = () => {
  const dispatch = useDispatch()
  const inputSearchRef = useRef()
  const { searchUsers } = useSelector(state => state.gymStack)

  const onSearch = () => {
    dispatch(searchUsersByName(inputSearchRef.current.value))
  }
  // const onSearch = (e) => {
  //   dispatch(searchUsersByName(e.target.value))
  //   console.log(':0');
  // }


  return (
    <article className="bg-orange-600 p-6 w-full rounded-md">
      <form className="flex flex-wrap">
        <label className="block w-full text-xl font-bold mb-2" htmlFor="search">Buscar Usuario</label>
        <input
          ref={inputSearchRef} 
          className="block w-full text-xl py-3 px-2 rounded-md border-2 border-orange-500" 
          type="text" 
          onChange={onSearch}
          name="search" 
          id="search" />
      </form>
      <SearchContainer searchUsers={searchUsers} inputSearch={inputSearchRef?.current?.value} />
    </article>
  )
}