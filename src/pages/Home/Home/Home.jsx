import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
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
           
           <Overall></Overall>
        </div>
    );
};

export default Home;