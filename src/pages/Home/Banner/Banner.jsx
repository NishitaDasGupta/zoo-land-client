

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/wild-animal-nature_1308-24911.jpg?size=626&ext=jpg&ga=GA1.1.1614607020.1683036746&semt=ais")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      <h1 className="mb-5 text-5xl font-bold">Animal Toys Galore!</h1>
      
      <p className="mb-5 text-xl">Explore our vast selection of animal toys and bring home endless fun. From cute and cuddly to interactive and educational, our toys will spark imagination and create cherished memories. Shop now and let the adventures begin!</p>
      <button className="btn border-white bg-orange-400 hover:bg-orange-600">Shop now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;