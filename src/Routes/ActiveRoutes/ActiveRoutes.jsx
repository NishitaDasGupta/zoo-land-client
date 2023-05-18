
import { NavLink } from 'react-router-dom';
const ActiveRoutes = ({to,children})=> {
    return (
        <NavLink to={to} className=
        {({ isActive }) => isActive ? "bg-orange-500 text-white" : ""} >{children} </NavLink>
    );
};

export default ActiveRoutes;