
const Banner = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className="hero min-h-screen mb-3" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/wild-animal-nature_1308-24911.jpg?size=626&ext=jpg&ga=GA1.1.1614607020.1683036746&semt=ais")` }}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className=" text-neutral-content">
    <div className="max-w-2xl">
      <h1 className="mb-5 p-4 text-4xl bg-orange-400/90 border-r-8 border-orange-800 text-white font-semibold">Animal Toys Galore!</h1>
      
      <p className="mb-5 ml-7 border-l-8 border-orange-500 text-xl bg-gray-700/70 p-4">Explore our vast selection of animal toys and bring home endless fun. From cute and cuddly to interactive and educational, our toys will spark imagination and create cherished memories. Shop now and let the adventures begin!</p>
      <button className="btn ml-7 border-white bg-orange-400 hover:bg-orange-600">Shop now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;