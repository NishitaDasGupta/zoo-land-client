import subscribe from "../../../assets/Subscriber (1).gif"
import { AiOutlineSend } from 'react-icons/ai';
const Subscribe = () => {
    return (
        <div className="mx-auto my-40">
            <div className="lg:flex items-center justify-center">
                <img src={subscribe} alt="" />
                <div className="text-center">
    <h1 className="text-5xl font-bold">Subscribe for Offer!</h1>
    <p className="text-xl font-bold py-6">NEWSLETTER SIGNUP</p>
  
    <div className="relative">
      <input
        type="email"
        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 pr-8 pl-4 block w-full appearance-none"
        placeholder="Your Email"
      />
      <button 
        className="absolute right-0 bottom-0 mb-2 mr-2 py-2 px-4 rounded"
      >
        <AiOutlineSend/>
      </button>
    </div>
    
    <hr className="mx-auto w-full max-w-xs mb-5 " />
<div className="flex items-center justify-center gap-2">
<input type="checkbox"/>
    <p>I agree to the terms of services</p>
</div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;