import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToy,setMyToy] = useState([]);
    const url = `http://localhost:5000/allToys?sellerEmail=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToy(data)
            })
    }, [])
    return (
  <div>
          <h2 className="text-center text-3xl font-bold text-orange-600 my-3">Your Toy Items</h2>
        <div className="overflow-x-auto mt-5">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th> 
              <th>Toy Name</th> 
              <th>Animal Type</th> 
              <th>Sub-category</th> 
              <th>Price</th> 
              <th className="text-center">Available Quantity</th> 
              <th></th>
            </tr>
          </thead> 
          <tbody>
            {
                myToy.map((toy,index) =><MyToysTable
                    key={toy._id}
                    toy={toy}
                    index={index}></MyToysTable> )
            }
        
        
          </tbody> 
         
        </table>
      </div>
  </div>
    );
};

export default MyToys;