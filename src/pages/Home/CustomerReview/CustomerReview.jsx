import { useEffect, useState } from "react";
// import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
const CustomerReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://zoo-land-server-sigma.vercel.app/customer')
            .then(res => res.json())
            .then(data => {
                setReview(data);
               
            })
    }, [])
    return (
        <div className="mx-auto my-40 text-center">
           <h2 className="text-4xl font-bold text-center mb-10 text-[#e51f6e]">Our Testimonials</h2>
     
            <div className="w-3/4 mx-auto">
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <div className="w-4/5 mx-auto">
                        {
                            review.map(item => <SwiperSlide
                                key={item._id}>
                                <div className="text-center mx-20">


                                    <div className="avatar mr-6">
                                        <div className="w-16 rounded-full shadow-xl">
                                            <img className="border-2 border-[#e51f6e] rounded-full" src={item.customerPic} />
                                        </div>
                                    </div>
                                    <h3 className="text-[#e51f6e] text-xl uppercase mt-5">{item.customerName}</h3>
                                    <Rating
                                        className="mx-auto mb-7"
                                        style={{ maxWidth: 100 }}
                                        value={item.rating}
                                        readOnly
                                    />


                                    <p>{item.customerReview}</p>
                                </div>

                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default CustomerReview;