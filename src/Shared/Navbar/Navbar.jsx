
import logo from "../../../src/assets/ZooLand.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveRoutes from "../../Routes/ActiveRoutes/ActiveRoutes";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.error(error.message);
      });

  }




  return (

      <div className="navbar  mx-auto fixed z-30 bg-opacity-30 bg-black">

        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-52">

              <li className="font-bold"><ActiveRoutes to='/'>Home</ActiveRoutes></li>
              <li className="font-bold"><ActiveRoutes to='/allToys'>All Toys</ActiveRoutes></li>
              <li className="font-bold"><ActiveRoutes to='/blogs'>Blogs</ActiveRoutes></li>
              {
                user ?
                  <div>
                    <li className="font-bold"><ActiveRoutes to='/myToys'>My Toys</ActiveRoutes></li>
                    <li className="font-bold"><ActiveRoutes to='/addToy'>Add a Toy</ActiveRoutes></li>
                    <>
                      {
                        user.photoURL && <img className="w-8 h-8 rounded-full border-2 border-white" src={user.photoURL} title={user.displayName} />
                      }
                    </>
                    <li className="font-bold"><button onClick={handleLogOut}>LogOut</button></li>
                  </div>
                  :
                  <li className="font-bold"><ActiveRoutes to='/login'>Login</ActiveRoutes></li>
              }

            </ul>
          </div>
          <div className="flex items-center justify-center ">
           <Link to="/"> <div className="w-16 pr-4">
              <img src={logo}  />
            </div></Link>
            <h2 className="text-4xl text-white font-bold">zoo<span className="text-[#e51f6e]">Land</span></h2>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">



            <li className=" font-bold text-white"><ActiveRoutes to='/'>Home</ActiveRoutes></li>
            <li className=" font-bold text-white"><ActiveRoutes to='/allToys'>All Toys</ActiveRoutes></li>
            <li className=" font-bold text-white"><ActiveRoutes to='/blogs'>Blogs</ActiveRoutes></li>
            <div>
              {
                user ?
                  <div className="flex flex-row items-center justify-center">
                    <li className=" font-bold text-white"><ActiveRoutes to='/myToys'>My Toys</ActiveRoutes></li>
                    <li className=" font-bold text-white"><ActiveRoutes to='/addToy'>Add a Toy</ActiveRoutes></li>
                    <div>
                      {
                        user.photoURL && <img className="w-8 h-8 rounded-full border-2 border-white" src={user.photoURL} title={user.displayName} />
                      }
                    </div>
                    <li className=" font-bold text-white"><button onClick={handleLogOut}>LogOut</button></li>
                  </div>
                  :
                  <li className=" font-bold text-white"><ActiveRoutes to='/login'>Login</ActiveRoutes></li>
              }
            </div>

          </ul>
        </div>


      </div>

  );
};

export default Navbar;