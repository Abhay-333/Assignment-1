import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RandomUser from "./Components/RandomUser.jsx";
import RandomJoke from "./Components/RandomJoke.jsx";
import CatList from "./Components/CatList.jsx";
import Navbar from "./Components/Navbar.jsx";
import Layout from "./Components/Layout.jsx";
import { StrictMode } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/randomUser" element={<RandomUser />}></Route>
      <Route path="/randomJoke" element={<RandomJoke />}></Route>
      <Route path="/catList" element={<CatList />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
