import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const toy = useLoaderData();
    const { _id, animal, availableQuantity, price, subcategory, toyName, picture, detailDescription, rating
    } = toy;
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const rating = form.rating.value;
        const detailDescription = form.detailDescription.value;

        const updatedToy = { picture, price, availableQuantity, rating, detailDescription }
        // console.log(updatedToy);

        fetch(`http://localhost:5000/allToy/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToy)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Successfully Updated!'
                    )
                    navigate("/myToys");
                }
            })

    }
    return (
        <div className="mt-7 bg-base-50">

            <div className="text-center mt-4">
                <h2 className="font-bold text-2xl">Update Your -  {toyName} Toy</h2>
                <p >Type: <span className="text-orange-600">{animal}</span> | <span className="text-orange-600">{subcategory}</span>  </p>
            </div>
            <form onSubmit={handleUpdate} className="p-10 mx-auto lg:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo of Toy</span>
                    </label>
                    <input type="text" name="picture"
                        defaultValue={picture}
                        placeholder="Photo URL of Toy" className="input input-bordered" />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" name="price"
                            defaultValue={price} placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <input type="text" name="detailDescription"
                            defaultValue={detailDescription} placeholder="Description of Toy" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <input type="text" name="availableQuantity"
                            defaultValue={availableQuantity} placeholder="Availabel quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <input type="text" name="rating"
                            defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn my-7 w-1/2 lg:w-1/3 bg-orange-400 hover:bg-orange-600">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Update;