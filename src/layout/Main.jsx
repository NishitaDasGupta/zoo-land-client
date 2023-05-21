import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

const Main = () => {

    const navigation = useNavigation();
    console.log(navigation.state);
    if (navigation.state === `loading`) {
        return <div className="text-center ">Loading ...</div>;

    }
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <br /> <br />
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;