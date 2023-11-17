import React from "react";
import "./home.css";
import Lojo from "../../Assets/logomaker1.png";
import {  NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import laptop4 from "../../Assets/laptop/laptop4.jpg";
import headphone7 from "../../Assets/headphone/headphone7.jpg";
import laptop3 from "../../Assets/laptop/laptop3.jpg";
function Home() {
  let up1 =document.querySelector(".up")
    window.onscroll=function(){
        if(this.scrollY>=230){
            up1.style.display="block";
        }
        else{
            up1.style.display="none"; 
        };
    }  
      function top() {
        window.scrollTo({
            top:0,
            behavior:'smooth', 
        });
    }
  return (
    <div className="home flex relative text-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-home absolute scale-95 right-16  w-64 text-2xl font-bold">
          welcome To Shoply
        </h1>
        <p className=" p-home absolute top-12 text-lg right-18 text-orange-600 h-1">
          Hello! Wlcome To shoply That place you can
          <br /> find everything you need i wish happy shop!
        </p>
        <NavLink
          to={"shop"}
          className=" absolute bg-red-400 text-1xl shop-btn rounded-2xl w-28 left-20 top-48 h-8 duration-700 hover:rounded-tr-none"
        >
          Shop Now
        </NavLink>

        <img className=" absolute logo2" src={Lojo}></img>
        <div className="card-home duration-300 h-48 pt-11 row-span-2 col-span-2">
          <div className="offer-card w-44 pt-9 ml-10 cursor-pointer duration-300  hover:scale-125 rounded-lg">
            More offer <br />
            65%
          </div>
          <div className="delivery  bg-blue-200 pt-9 ml-10 duration-300 hover:scale-125 cursor-pointer rounded-lg">
            Fast delivery
          </div>
          <div className="quick bg-slate-300 ml-10 cursor-pointer hover:scale-125 duration-300 pt-9 rounded-lg">
            Quick response
          </div>
        </div>
        <span className="up" onClick={top}>
          <FaArrowUp />
        </span>
        <section className="best-products">
          <big>Best Produts</big>
          <img src={laptop4}></img>
          <p className="name">laptop dell</p>
          <p className="last">520$</p>
          <p className="priceb">410$</p><br></br><br/><br/><br/><br/><br/><br/>
          <img className="img" src={laptop3}></img>
          <p className="name">laptop asur</p>
          <p className="last">400$</p>
          <p className="priceb">310$</p><br/><br/><br/><br/><br/><br/>
          <img className="b3" src={headphone7} />
          <p className="name z3 b3">headphone mu201</p>
          <p className="last q3 b3">150$</p>
          <p className="priceb a3 b3">132$</p>
          <NavLink to={"shop"} className="all-btn  bg-slate-400">
            Show All
          </NavLink>
        </section>
      </motion.div>
    </div>
  );
}
export default Home;
