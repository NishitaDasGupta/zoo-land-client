
const AddToy = () => {
    return (
        <div className="mt-7 bg-base-50">
            <h2 className="text-4xl text-center font-bold">Add a Toy</h2>
            <form className="p-10">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo of Toy</span>
                    </label>
                    <input type="text" name="picture" placeholder="Photo URL of Toy" className="input input-bordered" />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="Toy name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Animal Type</span>
                        </label>
                        <input type="text" name="animal" placeholder="Animal Type of toy" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" name="subCategory" placeholder="Sub-Category of toy" className="input input-bordered" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Availabel quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Description of Toy" className="input input-bordered" />
                </div>
<div className="text-center">
<button className="btn my-7 w-1/2 lg:w-1/3 bg-orange-400 hover:bg-orange-600">Add a Toy</button>
</div>
            </form>
        </div>

    );
};

export default AddToy;