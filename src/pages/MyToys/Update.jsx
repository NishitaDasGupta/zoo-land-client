import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Update = () => {
    const toy = useLoaderData();
    useTitle("Update");
    const { _id, animal, availableQuantity, price, subcategory, toyName, picture, detailDescription, rating
    } = toy;
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const price = parseFloat(form.price.value);
        const availableQuantity = parseFloat(form.availableQuantity.value);
        const rating = parseFloat(form.rating.value);
        const detailDescription = form.detailDescription.value;

        const updatedToy = { picture, price, availableQuantity, rating, detailDescription }
        // console.log(updatedToy);

        fetch(`https://zoo-land-server-sigma.vercel.app/allToy/${_id}`, {
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
        <div className="mt-16 bg-base-50">

            <div className="text-center mt-4">
                <h2 className="font-bold text-2xl">Update Your -  {toyName} Toy</h2>
                <p >Type: <span className="text-[#e51f6e]">{animal}</span> | <span className="text-[#e51f6e]">{subcategory}</span>  </p>
            </div>
            <form onSubmit={handleUpdate} className="p-10 mx-auto lg:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Photo of Toy</span>
                    </label>
                    <input type="text" name="picture"
                        defaultValue={picture}
                        placeholder="Photo URL of Toy" className="input input-bordered text-slate-500 hover:text-black" />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="text" name="price"
                            defaultValue={price} placeholder="Price" className="input input-bordered text-slate-500 hover:text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <input type="text" name="detailDescription"
                            defaultValue={detailDescription} placeholder="Description of Toy" className="input input-bordered text-slate-500 hover:text-black" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <input type="text" name="availableQuantity"
                            defaultValue={availableQuantity} placeholder="Availabel quantity" className="input input-bordered text-slate-500 hover:text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <input type="text" name="rating"
                            defaultValue={rating} placeholder="Rating" className="input input-bordered text-slate-500 hover:text-black" />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn my-7 w-1/2 lg:w-1/3 bg-[#e51f6e] hover:bg-[#a0164d] ">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Update;