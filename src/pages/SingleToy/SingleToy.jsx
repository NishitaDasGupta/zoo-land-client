import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import useTitle from "../../hooks/useTitle";
const SingleToy = () => {
    const toy = useLoaderData();
    useTitle("Toy Details");
    const { seller, animal, availableQuantity, price, sellerEmail, subcategory, toyName, picture, detailDescription, rating
    } = toy;
    return (
        <div className="mt-14">
           
            <div className="flex items-center mb-3">
              <Link to="/allToys" title="Back" className="text-xl mr-3" >
              <BsFillArrowLeftCircleFill/></Link >
               {subcategory} <AiOutlineRight/> {animal} <AiOutlineRight/> {toyName}</div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-3xl">{toyName}</h2>
                    <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                    <p className="flex-grow-0">Type: <span className="text-orange-600">{animal}</span> | <span className="text-orange-600">{subcategory}</span>  </p>
                    <div className="divider"></div>
                    <h3 className="text-5xl font-semibold text-orange-600">$ {price}</h3>
                    <p className="my-8 text-orange-800 text-lg flex-grow-0">Quantity: <span className=" font-medium ps-5 text-orange-600">{availableQuantity}</span></p>
                    <div className="card-actions ">
                        <button className="btn w-1/4 bg-orange-300 hover:bg-orange-600">Buy Now</button>
                        <button className="btn w-1/4 bg-orange-800  hover:bg-orange-600">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 ">
                <div className="card bg-base-100 shadow-xl mt-7 col-span-3 p-5 mr-5">
                    <h2 className="card-title text-xl font-bold text-orange-700 mb-5">Product details of Premium Quality - {toyName} | {subcategory} | {animal}</h2>
                    <p className="mb-3">Type : {animal}</p>
                    <p className="mb-3">Sub-Category : {subcategory}</p>
                    <p className="mb-3">Description : {detailDescription}</p>
                    <p>Added by <span className="text-orange-500">{seller} || {sellerEmail}</span></p>
                </div>
                <div className="card bg-base-100 shadow-xl mt-7 p-5 ">
                <h2 className="card-title text-xl font-bold text-orange-700 mb-5">Tell us what you think!</h2>
                <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mt-3" />
                <input type="text" placeholder="Product Review" className="input input-bordered w-full max-w-xs mt-3" />
                </div>
            </div>



        </div>

    );
};

export default SingleToy;