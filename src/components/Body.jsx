import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      body
      <Footer />
    </div>
  );
};

export default Body;
