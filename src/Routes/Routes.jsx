import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import Error from "../layout/Error";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Update from "../pages/MyToys/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "/alltoy/:id",
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({params})=> fetch(`https://zoo-land-server-sigma.vercel.app/alltoy/${params.id}`)
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>

            },
            {
                path: "addToy",
                element: <PrivateRoute> <AddToy></AddToy></PrivateRoute>
               
            },
            {
                path: "update/:id",
                element: <PrivateRoute> <Update></Update></PrivateRoute>,
                loader: ({params})=> fetch(`https://zoo-land-server-sigma.vercel.app/alltoy/${params.id}`)
               
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
        
]},
{
    path: "*",
    element: <Error></Error>
}
]);

export default router;