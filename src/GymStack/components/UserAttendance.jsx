import { useDispatch, useSelector } from "react-redux"
import { searchUsersByName } from "../../store/gymstack/gymstackSlice"
import { SearchContainer } from "./SearchContainer"
import { useEffect, useRef } from "react"
import { startGetUsers } from "../../store/gymstack/thunks"

export const UserAttendance = () => {
  const dispatch = useDispatch()
  const inputSearchRef = useRef()
  const { searchUsers, users } = useSelector(state => state.gymStack)

  const onSearch = () => {
    dispatch(searchUsersByName(inputSearchRef.current.value))
  }

  useEffect(() => {
    if(users.length === 0) {
      dispatch(startGetUsers())
    }
  })


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