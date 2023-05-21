
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Gallery from "../Gallery/Gallery";
import Overall from "../Overall/Overall";
import ShopCategory from "../ShopCategory/ShopCategory";


const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <CustomerReview></CustomerReview>
            <Overall></Overall>
         
         </div>
    );
};

export default Home;