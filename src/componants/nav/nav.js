import React from "react";

import Img from "../../Assets/logomaker.png";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { motion } from "framer-motion";
import {
  FaStore,
  FaHome,
  FaSignInAlt,
  FaHeadset,
  FaInfo,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
function Nav() {
  var moon = document.getElementById("dark");
  var sun = document.getElementById("light");
  let bars = document.querySelector(".bars");
  let na = document.querySelectorAll("#nm");
 let body = document.querySelector(".nav")
  function open() {
    document.querySelector(".a").style.display = "block";
    document.querySelector("#sign").style.display = "block";
    document.querySelector("#about").style.display = "block";
    document.querySelector("#contact").style.display = "block";
    document.querySelector("#shop").style.display = "block";
    document.querySelector(".cancel").style.display = "block";
    document.querySelector("ul").classList.add("ma");
    document.FaMoon.classList.toggle("moon-ph");
  }
  function close() {
    document.querySelector(".a").style.display = "none";
    document.querySelector("#sign").style.display = "none";
    document.querySelector("#about").style.display = "none";
    document.querySelector("#contact").style.display = "none";
    document.querySelector("#shop").style.display = "none";
    document.querySelector(".cancel").style.display = "none";
    document.querySelector("ul").classList.remove("ma");
  }  
  function dark() {
    document.body.classList.toggle("dark-theme");
    moon.style.display= "none";
    sun.style.display= "block";
  }
  function light() {
    document.body.classList.remove("dark-theme");
    moon.style.display = "block";
    sun.style.display = "none";
  }
  return (
    <div className="nav">
      <nav>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        > 
          <FaBars className="bars" onClick={open}></FaBars>
          <FaTimes className="cancel" onClick={close}></FaTimes>
          <img src={Img} className="logo"></img>
          <ul className=" duration-700">
            <FaMoon id="dark" onClick={dark}></FaMoon>
            <FaSun id="light" onClick={light}></FaSun>
            <NavLink to={"/"} className="a" id="home">
              {" "}
              <FaHome className="ic"></FaHome>Home
            </NavLink>
            <NavLink to={"/shop"} className="a" id="shop">
              {""}
              <FaStore className="ic"></FaStore>Shop
            </NavLink>
            <NavLink to={"/sign"} className="a" id="sign">
              <FaSignInAlt className="ic"></FaSignInAlt>Sign in
            </NavLink>
            <NavLink to={"/contact"} className="a" id="contact">
              <FaHeadset className="ic"></FaHeadset>Contact
            </NavLink>
            <NavLink to={"/about"} className="a" id="about">
              <FaInfo className="ic"></FaInfo>About
            </NavLink>
          </ul>
        </motion.div>
      </nav>
    </div>
  );
}

export default Nav;
