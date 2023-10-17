import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { useDispatch, useSelector } from "react-redux"
import { startUpdateSuscription } from "../../store/gymstack/thunks"
import { useRef } from "react"

export const BtnActualizarSus = ({ id }) => {
  const dispatch = useDispatch()
  const MySwal = withReactContent(Swal)
  const { planes } = useSelector(state => state.gymStack)
  const selectRef = useRef()

  const onUpdateSuscription = () => {
    MySwal.fire({
      title: 'Actualizar suscripción',
      html: <form>
        <label htmlFor="type" className="mb-6">¿A qué plan desear actualizar?</label>
        <select
          ref={selectRef}
          className="text-black mt-5 p-2 text-center font-semibold text-xl rounded-md bg-gray-400"
          name="type"
          id="type">
          <option
            disabled
            className="text-sm font-bold disabled:text-slate-700" value="none">--Selecciona plan--</option>
          {
            planes.map(plan => (
              <option key={plan.id} className="text-sm font-bold text-black" value={JSON.stringify(plan)}>{plan.name} - {plan.month_durations} meses</option>
            ))
          }
        </select>
      </form>,
      showConfirmButton: true,
      confirmButtonText: 'Confirmar suscripcion',
      confirmButtonColor: 'green',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: 'red'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startUpdateSuscription({ type: selectRef.current.value, vence: (new Date()).toString(), id }))
      }
    })
  }

  return (
    <button
      onClick={onUpdateSuscription}
      className="bg-neutral-950 p-2 text-white rounded-md">Actualizar Suscripcion</button>
  )
}