

const GalleryImg = ({pic}) => {
    const {picture} = pic;
    return (
        <div className="border-l-2 border-orange-300">
            <img className="p-2 hover:scale-125 rounded-lg mx-auto" src={picture} />
        </div>
    );
};

export default GalleryImg;