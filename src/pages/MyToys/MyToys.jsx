import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);
    const url = `http://localhost:5000/allToys?sellerEmail=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToy(data)
            })
    }, [])
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/alltoy/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = myToy.filter(value => value._id !== _id );
                            setMyToy(remaining);
                        }
                    })


             
            }
          })
     
    }
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
                            myToy.map((toy, index) => <MyToysTable
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                index={index}></MyToysTable>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;