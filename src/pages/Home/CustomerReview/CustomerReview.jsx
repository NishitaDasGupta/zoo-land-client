import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://zoo-land-server-sigma.vercel.app/customer')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="mx-auto mt-16">
            <h2 className="text-4xl border-l-8 border-r-8 border-orange-500 font-bold text-center mb-5 text-orange-600">Hear What Customers Say</h2>
            <div className="my-8 w-3/4 mx-auto space-y-5">

                {
                    reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard> )
                }
            
            </div>
        </div>
    );
};

export default CustomerReview;