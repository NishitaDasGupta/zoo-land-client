import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div data-aos="zoom-in-up" className="hero min-h-screen mb-3 " style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/horizontal-shot-charming-sibling-girls-playing-together-peetee-tent-with-wooden-eco-toys-toddler-baby-her-elder-sister-spending-time-together-home_176532-20876.jpg?size=626&ext=jpg&ga=GA1.1.1614607020.1683036746&semt=ais")` }}>
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className=" text-neutral-content">
        <div className="grid lg:grid-cols-2 gap-6 p-36">
          <img src="https://img.freepik.com/premium-photo/horizontal-shot-charming-sibling-girls-playing-together-peetee-tent-with-wooden-eco-toys-toddler-baby-her-elder-sister-spending-time-together-home_176532-20876.jpg?size=626&ext=jpg&ga=GA1.1.1614607020.1683036746&semt=ais" alt="" />
          <div className="max-w-2xl">
            <h1 className="mb-5 p-4 text-2xl bg-[#f28fb7] border-l-8 border-[#e51f6e] text-white font-semibold">Animal Toys Galore!</h1>

            <p className="mb-5 border-l-8 border-[#e51f6e] text-xl bg-stone-600/70 p-4">Explore our vast selection of animal toys and bring home endless fun. From cute and cuddly to interactive and educational, our toys will spark imagination and create cherished memories. Shop now and let the adventures begin!</p>
            <button className="btn ml-7 border-white bg-[#e51f6e] hover:bg-[#b71958]">Shop now</button>
            <button className="btn ml-7 border-white  bg-transparent  hover:bg-[#b71958]">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;