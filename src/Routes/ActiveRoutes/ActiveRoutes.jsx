
import { NavLink } from 'react-router-dom';
const ActiveRoutes = ({to,children})=> {
    return (
        <NavLink to={to} className=
        {({ isActive }) => isActive ? "text-black border-b-4 border-l-2 border-r-2 border-orange-400 bg-slate-100  duration-300 " : ""} >{children} </NavLink>
    );
};

export default ActiveRoutes;