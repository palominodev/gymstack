import { useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { startLoginWithEmail } from "../../store/auth/thunks"
import { useState } from "react"

export const Login = () => {
  const [visible, setVisible] = useState(false)
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
    <div className="flex min-h-screen justify-center items-center bg-blue-500">
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
            required
            className="rounded-md text-lg p-1"
            value={email}
            onChange={onInputChange}
            type="email"
            name="email"
            id="email" />
        </div>
        <div className="flex flex-col items-stretch" >
          <label 
            className="font-bold"
            htmlFor="password">Contraseña</label>
          <input
            required
            className="rounded-md text-lg p-1"
            value={password}
            onChange={onInputChange}
            type={visible? "text" : "password"}
            name="password"
            id="password" />
            <div className="flex justify-center mt-1 gap-2">
              <input onChange={() => setVisible(!visible)} checked={visible} type="checkbox" name="visiblePassword" id="visiblePassword" />
              <label htmlFor="visiblePassword">Mostrar contraseña</label>
            </div>
        </div>
        <button
          className="bg-blue-600 font-bold rounded-md p-1 mt-2"
        >Ingresar</button>
      </form>
    </div>
  )
}