import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  useEffect(()=> {
    fetch("http://localhost:5000/allToys")
    .then(res => res.json())
    .then(data => setAllToys(data))
  },[])
    return (
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

            // allToys.slice(0,20).map((toy,index) =><AllToysTable
            allToys.map((toy,index) =><AllToysTable
            key={toy._id}
            toy={toy}
            index={index}
            ></AllToysTable> )
          }
         
      
        </tbody> 
       
      </table>
    </div>
    );
};

export default AllToys;