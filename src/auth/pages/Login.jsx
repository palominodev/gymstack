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
    <div>
      <form
        onSubmit={onLogin}
      >
        <label htmlFor="email">email</label>
        <input 
          value={email}
          onChange={onInputChange}
          type="email" 
          name="email" 
          id="email" />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          value={password}
          onChange={onInputChange} 
          type="password" 
          name="password" 
          id="password" />
          <button>Ingresar</button>
      </form>
    </div>
  )
}