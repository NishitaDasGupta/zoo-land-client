import { useEffect, useState } from "react";
import GalleryImg from "./GalleryImg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 9
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    }
    return (
        <div className="mx-auto mt-16 text-center">
            <h2 className="text-4xl font-bold text-center mb-5 text-orange-600">Imagination Station: Kids Gallery Bliss</h2>
            <p className="max-w-xl mx-auto mb-5">Enter a realm of excitement in our Kids Gallery. With vibrant exhibits and captivating activities, children indulge in boundless entertainment, fostering imagination, creativity, and endless fun.</p>
            <Carousel responsive={responsive} className="max-w-5xl mx-auto">
                {
                    gallery.map(pic => <GalleryImg
                        key={pic._id}
                        pic={pic}
                    ></GalleryImg>)
                }
            </Carousel>
        </div>









    );
};

export default Gallery;