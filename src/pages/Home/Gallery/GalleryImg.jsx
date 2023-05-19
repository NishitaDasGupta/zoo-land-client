

const GalleryImg = ({pic}) => {
    const {picture} = pic;
    return (
        <div className="mx-auto">
            <img className="p-2 hover:scale-125 rounded-lg" src={picture} />
        </div>
    );
};

export default GalleryImg;