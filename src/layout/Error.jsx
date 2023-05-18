import { useNavigate } from "react-router-dom";
import errorPic from "../assets/404.png"

const Error = () => {
    const navigate = useNavigate();
    return (
        <div >
            <img className="mx-auto w-3/5" src={errorPic} alt="" />
            <div className="text-center p-12">
            <button onClick={()=> {navigate('/')}} className="text-white btn  bg-orange-400 hover:bg-orange-600">Back to home</button>
            </div>
        </div>
    );
};

export default Error;