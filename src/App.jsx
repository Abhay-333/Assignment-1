import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import RandomUser from "./Components/RandomUser";
import CatList from "./Components/CatList";
import RandomJoke from "./Components/RandomJoke";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main h-screen w-full bg-[#222121] text-[white]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
