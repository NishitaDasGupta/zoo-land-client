import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [query, setQuery] = useState('');
  useTitle("All Toys");
  useEffect(() => {
    fetch("https://zoo-land-server-sigma.vercel.app/allToys")
      .then(res => res.json())
      .then(data => setAllToys(data))
  }, [])

  return (
    <div className="mt-16 pt-4">
      <h2 className="text-center text-3xl font-bold text-[#e51f6e] my-3">Toy Items</h2>

      <div className="text-right" >
        <input
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Search by Toy Name"
          className="input input-bordered bg-[#f7bcd4]"
        />

      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              allToys.filter(toy => toy.toyName.toLowerCase().includes(query)).map((toy, index) => <AllToysTable
                key={toy._id}
                toy={toy}
                index={index}
              ></AllToysTable>)
            }


          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AllToys;