import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    useTitle("Add");
    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const sellerEmail = form.sellerEmail.value;
        const seller = form.seller.value;
        const picture = form.picture.value;
        const toyName = form.toyName.value;
        const price = parseFloat(form.price.value);
        const animal = form.animal.value;
        const subcategory = form.subcategory.value;
        const availableQuantity = parseFloat(form.availableQuantity.value);
        const rating = parseFloat(form.rating.value);
        const detailDescription = form.detailDescription.value;

        const toy = {
            sellerEmail, seller, picture, toyName, price, animal, subcategory, availableQuantity, rating, detailDescription,
        }
        fetch('https://zoo-land-server-sigma.vercel.app/allToys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Added!',
                    )
                    form.reset();
                }
            })
    }
    return (
        <div className="mt-16 pt-4 bg-base-50">
            <h2 className="text-4xl text-center font-bold">Add a Toy</h2>
            <form onSubmit={handleAddToy} className="p-10">
                
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="form-control">
                   
                        <label className="label">
                            <span className="label-text font-bold">Seller Email</span>
                        </label>
                        <input type="email" name="sellerEmail" placeholder="Your email"
                            value={user.email}
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Seller Name</span>
                        </label>
                        <input type="text" name="seller"
                            placeholder="Your name"
                            value={user.displayName}
                            className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo of Toy</span>
                    </label>
                    <input type="text" name="picture" placeholder="Photo URL of Toy" className="input input-bordered" />
                </div>
                <div className="grid lg:grid-cols-3 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Toy name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Animal Type</span>
                        </label>
                        <input type="text" name="animal" placeholder="Animal Type of toy" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" name="subcategory" placeholder="Category of toy" className="input input-bordered" />
                    </div>
                </div>
           

                
        
                <div className="grid lg:grid-cols-3 gap-4">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <input type="text" name="availableQuantity" placeholder="Availabel quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>
                    <input type="text" name="detailDescription" placeholder="Description of Toy" className="input input-bordered" />
                </div>
                <div className="text-center">
                    <button className="btn my-7 w-1/2 lg:w-1/3 bg-orange-400 hover:bg-orange-600">Add a Toy</button>
                </div>
            </form>
        </div>

    );
};

export default AddToy;