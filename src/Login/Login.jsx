import { Link } from "react-router-dom";
import login from "../assets/login.png"
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
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={login} alt="" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-center">Please Login!</h2>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">

              <form onSubmit={handleLogin}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email"  name="email" placeholder="email" className="input input-bordered" />
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