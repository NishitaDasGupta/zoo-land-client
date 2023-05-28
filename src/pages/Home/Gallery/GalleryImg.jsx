import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GalleryImg = ({pic}) => {
    const {picture} = pic;
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return (
        <div data-aos="flip-left"
        data-aos-duration="3000">
            <img className="p-2  rounded-lg mx-auto" src={picture} />
        </div>
    );
};

export default GalleryImg;