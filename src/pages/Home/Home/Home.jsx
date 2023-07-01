
import useTitle from "../../../hooks/useTitle";
import Articles from "../Articles/Articles";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Gallery from "../Gallery/Gallery";
import Overall from "../Overall/Overall";
import Question from "../Question/Question";
import Services from "../Services/Services";
import ShopCategory from "../ShopCategory/ShopCategory";
import Subscribe from "../Subscribe/Subscribe";
import Video from "../Video/Video";


const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Video></Video>
      <ShopCategory></ShopCategory>
      <Question></Question>
      <Gallery></Gallery>
      <Services></Services>
      <Articles></Articles>
      <Subscribe></Subscribe>
      <CustomerReview></CustomerReview>
      <Overall></Overall>

    </div>
  );
};

export default Home;