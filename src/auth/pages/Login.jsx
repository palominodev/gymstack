import { useForm } from "../../hooks/useForm"

export const Login = () => {
  const {correo, password, onInputChange} = useForm({
    correo: "",
    password: "",
  })
  return (
    <div>
      <form>
        <label htmlFor="correo">Correo</label>
        <input 
          value={correo}
          onChange={onInputChange}
          type="email" 
          name="correo" 
          id="correo" />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          value={password}
          onChange={onInputChange} 
          type="password" 
          name="password" 
          id="password" />
      </form>
    </div>
  )
}