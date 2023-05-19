import { useEffect } from "react";

const AllToys = () => {
  useEffect(()=> {
    fetch("http://localhost:5000/allToys")
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
    return (
        <div>
         
        </div>
    );
};

export default AllToys;