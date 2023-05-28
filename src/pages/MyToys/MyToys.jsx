import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { RiArrowDropDownLine } from "react-icons/ri";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    useTitle("My Toys");
    const [myToy, setMyToy] = useState([]);
    const url = `https://zoo-land-server-sigma.vercel.app/allToys?sellerEmail=${user.email}`;
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
                fetch(`https://zoo-land-server-sigma.vercel.app/alltoy/${_id}`, {
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
                            const remaining = myToy.filter(value => value._id !== _id);
                            setMyToy(remaining);
                        }
                    })
            }
        })
    }


    const handlePrice = value => {
        console.log(value);
        fetch(`https://zoo-land-server-sigma.vercel.app/allToys?sellerEmail=${user.email}&sort=${value}`)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }



    return (
        <div className="mt-16">
            {
                myToy.length === 0 ?

                    <h2 className="text-center font-bold mt-5">You did not add any toy.</h2>
                    :
                    <div>

                        <h2 className="text-center text-3xl font-bold text-orange-600 my-3">Your Toy Items</h2>
                        <div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="bg-orange-400 hover:bg-orange-600 btn m-1">Price  <div className="text-2xl font-bold">
                                <RiArrowDropDownLine/></div></label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className="hover:bg-orange-100"><button onClick={() => { handlePrice(1) }}>Ascending Price</button></li>
                                    <li className="hover:bg-orange-100"><button onClick={() => { handlePrice(-1) }}>Descending Price</button></li>
                                </ul>
                            </div>
                        </div>
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
            }
        </div>
    );
};

export default MyToys;