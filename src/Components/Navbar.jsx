import React from "react";
import RandomUser from "./RandomUser";
import RandomJoke from "./RandomJoke";
import CatList from "./CatList";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-center gap-[40vw] h-[9vh] ">
        <div className="left">
          <h1 className="font-bold text-2xl">Assignment 1</h1>
        </div>

        <div className="right flex items-center gap-[3vw]">
          <Link className="font-semibold" to="/randomUser">Random User</Link>
          <Link className="font-semibold" to="/randomJoke">Random Joke</Link>
          <Link className="font-semibold" to="/catList">Cat List</Link>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
