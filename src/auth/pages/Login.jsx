import { useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { startLoginWithEmail } from "../../store/auth/thunks"

export const Login = () => {
  const dispatch = useDispatch()
  const {email, password, onInputChange} = useForm({
    email: "",
    password: "",
  })

  const onLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginWithEmail({
      email,
      password
    }))
  }

  return (
    <div className="flex min-h-screen justify-center items-center bg-orange-500">
      <form
        className="border rounded-md p-5 flex flex-col gap-2"
        onSubmit={onLogin}
      >
        <h3 className="text-3xl font-bold text-center" >Inicio de Sesión</h3>
        <div className="flex flex-col" >
          <label 
            className="font-bold"
            htmlFor="email">email</label>
          <input
            className="rounded-md text-lg p-1"
            value={email}
            onChange={onInputChange}
            type="email"
            name="email"
            id="email" />
        </div>
        <div className="flex flex-col" >
          <label 
            className="font-bold"
            htmlFor="password">Contraseña</label>
          <input
            className="rounded-md text-lg p-1"
            value={password}
            onChange={onInputChange}
            type="password"
            name="password"
            id="password" />
        </div>
        <button
          className="font-bold rounded-md border p-1 mt-2"
        >Ingresar</button>
      </form>
    </div>
  )
}