
import { NavLink } from 'react-router-dom';
const ActiveRoutes = ({to,children})=> {
    return (
        <NavLink to={to} className=
        {({ isActive }) => isActive ? "text-white border-b-4 border-l-2 border-r-2 border-[#e51f6e]  duration-300 " : ""} >{children} </NavLink>
    );
};

export default ActiveRoutes;