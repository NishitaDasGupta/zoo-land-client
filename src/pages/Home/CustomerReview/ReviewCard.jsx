
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const ReviewCard = ({ review }) => {
    const { customerName, email, customerPic, customerReview, rating } = review;
    return (
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
               <div className="flex items-center ">
               <div className="avatar mr-6">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={customerPic} />
                    </div>
                </div>
               <div>
               <h2>{customerName}</h2>
                <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
               </div>
               </div>
            </div>
            <div className="collapse-content">
                <p>{customerReview}</p>
                <small className="text-orange-700"> <a href="">{email}</a></small>
            </div>
        </div>
    );
};

export default ReviewCard;