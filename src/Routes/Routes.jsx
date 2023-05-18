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
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "myToys",
                element: <MyToys></MyToys>

            },
            {
                path: "addToy",
                element: <AddToy></AddToy>
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