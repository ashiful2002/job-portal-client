import React, { use, useContext } from "react";
import registerAnimation from "../../../src/assets/Animation - 1748284610157.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const user = { name, email, password, photo };
    console.log(user);

    // create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully registered.",
          icon: "success",
        });
        e.target.reset();
        navigate("/login");
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
          animationData={registerAnimation}
          loop={true}
        />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset space-y-2 mt-4">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                required
                className="input input-bordered w-full"
                placeholder="User Name"
              />
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
              <label className="label">Photo Url</label>
              <input
                name="photo"
                type="text"
                required
                className="input input-bordered w-full"
                placeholder="paste photo url"
              />

              <div className="mt-2">
                <Link to="/login" className="link link-hover text-sm">
                  Already have an account? please login
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
