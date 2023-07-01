import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../hooks/useTitle";
const Signup = () => {
    const { register,  updateProfileUser} = useContext(AuthContext);
    const [error, setError] = useState(null);
    useTitle("Register");
    const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
console.log(name ,
    photo,
    email,
    password);
        register(email, password)
            .then((result) => {
                const user = result.user;
                updateProfileUser(result.user, name, photo);
                setError(null);
                form.reset();
                navigate('/');
                console.log(user);

            })
            .catch((error) => {
                setError(error.message);
            });
    }


    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-5">Please Register!</h2>
            <div className="hero min-h-screen ">  <div className="w-1/2 ">
                        <div className="card  w-full  shadow-2xl ">

                            <form onSubmit={handleRegister}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                    </div>
                                    {
                                        error && <p className="text-red-600">{error}</p>
                                    }
                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#e51f6e] hover:bg-[#a0164d]">Register</button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <small >Already have an account? <Link to='/login' className="text-[#e51f6e]">Please Login</Link> </small>
                                </div>

                            </form>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Signup;