import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loginAnimation from "../../../src/assets/Animation - 1748338072161.json";
import { AuthContext } from "../../Context/AuthContext";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import Divider from "../../Components/Divider/Divider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // create user
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Success!",
          text: "User logged in successfull",
          icon: "success",
        });
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex md:justify-between flex-col lg:flex-row-reverse">
        <Lottie
          className="w-[300px] md:w-[400px]"
          animationData={loginAnimation}
          loop={true}
        />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Log In User</h1>
            <form onSubmit={handleLogin} className="fieldset space-y-2 mt-4">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                required
                className="input input-bordered w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                required
                className="input input-bordered w-full"
                placeholder="Password"
              />
              <div className="flex items-center justify-between">
                <div className="mt-2">
                  <Link className="link link-hover text-sm">
                    Forgot password
                  </Link>
                </div>
                <div className="mt-2">
                  <Link to="/register" className="link link-hover text-sm">
                    New user ? please register first
                  </Link>
                </div>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>
            </form>
            <Divider />
            <SocialLogin from={from} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
