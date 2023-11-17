import "./componants/welcome/welcome.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./componants/nav/nav";
import React, { useEffect, useState } from "react";
import Contact from "./componants/contact/contact";
import { motion } from "framer-motion";
import "./componants/home/home.js";
import Home from "./componants/home/home.js";
import Shop from "./componants/shop/shop";
import Sign from "./componants/sign/sign.js";
import About from "./componants/about/about";
import Log from "./componants/sign/logIn";
import Api from "./componants/api.js";

function App() {
  const [loading, setLoading] = useState(false); 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App ">
      {loading ? (
        <div className="bg-black h-full flex w-full justify-center align-middle top-">
          <div className="texts-containe">
            <h3 className="font-bold relative text-white justify-center align-middle text-center top-64 text-xl">
              welcome to shoplly
            </h3>
            <section className="dots-container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </section>
          </div>
        </div>
      ) : (
        <>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
              Home{" "}
            </Route>
            <Route path="/shop" element={<Shop />}>
              Shop{" "}
            </Route>
            <Route path="/sign" element={<Sign />}>
              Sign in
            </Route>
            <Route path="/contact" element={<Contact />}>
              Contact
            </Route>
            <Route path="/about" element={<About />}>
              About
            </Route>
            <Route path="/login" element={<Log />}>
              Log in
            </Route>
            <Route path="/api" element={<Api/>}>
              Api
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
