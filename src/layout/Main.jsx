import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <br /> <br />
            <Footer></Footer>
        </div>
    );
};

export default Main;