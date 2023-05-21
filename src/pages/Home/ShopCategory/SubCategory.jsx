import { Rating } from "@smastrom/react-rating";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Swal from "sweetalert2";

const SubCategory = ({ value }) => {
    const navigate =  useNavigate();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    const { _id, price, toyName, picture, rating } = value;
    const handleDetails = _id => {
        Swal.fire({
            title: 'You have to log in first to view details!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(`/alltoy/${_id}`);
            }
          })
    }
    return (
        <div data-aos="fade-up"
        data-aos-duration="2000" className="card w-72 rounded-t-3xl bg-base-100 shadow-2xl">
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
                    <button onClick={()=> {handleDetails(_id)}} className="btn w-full bg-orange-400 hover:bg-orange-600">View Details</button>
            </div>
        </div>
    );
};

export default SubCategory;