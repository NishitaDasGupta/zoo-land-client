import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const SubCategory = ({ value }) => {
    const { _id, price, toyName, picture, rating } = value;
    return (
        <div className="card w-72 rounded-t-3xl bg-base-100 shadow-2xl">
            <figure className=" px-10 pt-10 mx-auto">
                <img src={picture} alt="Toys" className="w-28 h-36 rounded-xl" />
            </figure>
            <div className="divider mb-0"></div>
            <div className="card-body p-0">
                <div className="p-3">
                    <h2 className="card-title text-black">{toyName}</h2>

                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-left text-black">Price: ${price}</p>
                        <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
                    </div>
                </div>
                <Link to={`/alltoy/${_id}`}>
                    <button className="btn w-full bg-orange-400 hover:bg-orange-600">View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default SubCategory;