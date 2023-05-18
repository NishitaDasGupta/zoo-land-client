import { Link } from "react-router-dom";
import logo from "../../../public/ZooLand.png"
const Navbar = () => {
  const items = <>
    <li className="text-orange-600 font-bold"><Link to='/'>Home</Link></li>
    <li className="text-orange-600 font-bold"><Link to='/allToys'>All Toys</Link></li>
    <li className="text-orange-600 font-bold"><Link to='/blogs'>Blogs</Link></li>
    <li className="text-orange-600 font-bold"><Link to='/login'>Login</Link></li></>
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {items}
            </ul>
          </div>
         <div className="flex items-center justify-center ">
         <div className="w-16 pr-4">
          <img src={logo} alt="" />
          </div>
          <h2 className="text-4xl font-bold">Zoo <span className="text-orange-600">Land</span></h2>
         </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {items}
          </ul>
        </div>
      
    
        </div>
 

      </div>
    
  );
};

export default Navbar;