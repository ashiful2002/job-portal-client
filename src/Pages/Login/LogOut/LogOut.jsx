import React, { use } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import Swal from "sweetalert2";

const LogOut = () => {
  const { signOutUser, user } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("sign out successfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button className="btn" onClick={handleSignOut}>
      Log out
    </button>
  );
};

export default LogOut;
