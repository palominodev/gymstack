import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../store/auth/thunks";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdLibraryBooks, MdReadMore } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ setSlide }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <nav className="flex flex-col gap-1 px-2 justify-between">
      <ul className="flex flex-col justify-center mt-52">
        <li className={`p-4 flex items-center gap-1`}>
          <NavLink
            onClick={() => setSlide(false)}
            className={"font-bold text-white uppercase flex gap-1"}
            to={"admin"}
          >
            <FaHome className="text-2xl mr-3 fill-white" />
            Inicio
          </NavLink>
        </li>
        <li className={`p-4 flex items-center gap-1`}>
          <NavLink
            onClick={() => setSlide(false)}
            className={"font-bold text-white uppercase flex gap-1"}
            to={"client"}
          >
            <FaUsers className="text-2xl mr-3 fill-white" />
            Clientes
          </NavLink>
        </li>
        <li className={`p-4 flex items-center gap-1`}>
          <NavLink
            onClick={() => setSlide(false)}
            className={"font-bold text-white uppercase flex gap-1"}
            to={"plans"}
          >
            <MdLibraryBooks className="text-2xl mr-3 fill-white" />
            Planes
          </NavLink>
        </li>
        <li className={`p-4 flex items-center gap-1`}>
          <NavLink
            onClick={() => setSlide(false)}
            className={"font-bold text-white uppercase flex gap-1"}
            to={"activity"}
          >
            <MdReadMore className="text-2xl mr-3 fill-white" />
            Actividad
          </NavLink>
        </li>
      </ul>
      <button
        onClick={onLogout}
        className={`relative flex items-center gap-4 sm:group-hover:w-3/4 sm:w-10 p-2 m-2 mb-14 transition-all bg-black text-white rounded-md overflow-hidden`}
      >
        <IoMdExit className="text-2xl" />
        <span className="absolute left-14">Salir</span>
      </button>
    </nav>
  );
};
