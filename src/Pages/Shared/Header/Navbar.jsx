import React, { use } from "react";
import { Link, Links, NavLink } from "react-router";
import AuthProvider from "../../../Context/AuthProvider";
import { AuthContext } from "../../../Context/AuthContext";
import LogOut from "../../Login/LogOut/LogOut";

const Navbar = () => {
  const { user } = use(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {/*  applicant links check roles as well  */}
      {user && (
        <>
          <NavLink to="/myApplications">User Applications</NavLink>
        </>
      )}

      {/*Links for recruter,  links check roles as well  */}
      {
        <>
          <NavLink to="/addJob">Add Job</NavLink>
          <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
        </>
      }
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden  md:flex">
          <ul className="menu menu-horizontal space-x-3 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <LogOut />
            ) : (
              <>
                <Link className="btn" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
