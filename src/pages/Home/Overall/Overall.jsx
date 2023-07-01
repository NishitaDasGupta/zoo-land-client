

const Overall = () => {
  return (
    <div className="text-center my-40 mx-auto">
     
      <h2 className="text-4xl font-bold text-center mb-5 text-[#e51f6e]">Metrics!! Tell the Story of Ours</h2>
      <p className="max-w-2xl mx-auto mb-20 text-justify px-2">  Explore the key metrics that reflect our commitment to wildlife conservation, visitor engagement, and our impact on preserving biodiversity. Discover the numbers that shape our journey.
     </p>
      <div className="stats shadow stats-vertical lg:stats-horizontal ">

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-[#e51f6e]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-[#e51f6e]">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current text-[#e51f6e]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-[#a0164d]">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-value">86%</div>
          <div className="stat-title">Delivery done</div>
          <div className="stat-desc text-[#e51f6e]">31 delivery remaining</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Overall;