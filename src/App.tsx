import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
// import LoginForm from "./Component/Pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Pages/Navbar";
// import path from "path";
import Home from "./Component/Pages/Home";
// import LoginForm from "./Component/Pages/Login";
import About from "./Component/Pages/About";
import User from "./Component/Pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<p>Hello sakshi</p>} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router> */}
      {/* <Router>
  
        <Routes>
          <Route path="/home" element={} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
