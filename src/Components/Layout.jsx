import React from "react";
import Navbar from "./Navbar";
import { RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main h-screen w-full bg-[#222121]">
      <Navbar></Navbar>
      <main>
      </main>
    </div>
  );
};

export default Layout;
