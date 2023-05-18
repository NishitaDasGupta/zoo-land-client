import { Link } from "react-router-dom";
import login from "../assets/login.png"
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-5">Please Login!</h2>
      <div className="hero min-h-screen ">
        <div className="hero-content w-full lg:flex-row-reverse flex-col">
          <div className="w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="w-1/2 lg:w-1/4">
            <div className="card  w-full  shadow-2xl ">

              <form onSubmit={handleLogin}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-orange-400 hover:bg-orange-600">Login</button>
                  </div>
                  <div className="divider">Or Sign in With</div>
                  <div className="form-control mt-6">
                    <button className="btn bg-orange-400 hover:bg-orange-600"><span className="text-2xl pr-3"><FaGoogle /></span> Google</button>
                  </div>
                </div>
                <div className="text-center">
                  <small >Dont have an account? <Link to='/signup' className="text-orange-600">Please Register</Link> </small>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;