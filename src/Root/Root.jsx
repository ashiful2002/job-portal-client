import React from "react";
import Navbar from "../Pages/Shared/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Header/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
