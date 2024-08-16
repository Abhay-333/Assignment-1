import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
  Outlet,
} from "react-router-dom";

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
