import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import toyVideo from "../../../assets/toyVideo.mp4"
const Video = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return (
        <div className="mx-auto my-40">
            <div>
                <h2 className="text-4xl font-bold text-center  text-gray-600 mb-5 ">Welcome to <span className="text-[#e51f6e] text-5xl">ZooLand</span> : Discover the Magic of Toys in Motion!</h2>
                <p className="max-w-2xl mx-auto mb-14 text-justify px-2">Immerse yourself in the enchanting world of ZooLand! Explore our captivating video showcase, where toys come alive with excitement, sparking wonder and imagination in children of all ages.
                </p>
                <video data-aos="zoom-in"
        data-aos-duration="3000" controls width="800" height="600" className="mx-auto shadow-xl">
                    <source src={toyVideo} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Video;