import React, { useState } from "react";
import "./about.css";
import { BiStar } from "react-icons/bi";
import { MdLocationPin, MdStar } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function About() {
  

  const [rate, setRate] = useState(null);
  const [hover, setHover] = useState(null);
  function thankMessage() {
    document.querySelector("span").style.display = "block";
  }
  return (
    <div className="about">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <big>About Us</big>
          <h1>Who are we?</h1>
        </div>
      <p>
        We are the Shoply Company for Electronic Trade. The company was
        established in the year 2009 and the company specializes in selling
        electronic products.
        <br /> We choose our employees with great care and
        <br /> they must have competence in work, design, marketing and design,
        and they must have many experiences in this labor market. We, the
        Shopley Company,
        <br /> wish you comfort and happiness in Every now and then we thank you
        for your time
      </p>
      <h3>please rate us</h3>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onClick={() => setRate(currentRate)}
            />
            <MdStar
              onClick={thankMessage}
              onMouseEnter={() => setHover(currentRate)}
              onMouseLeave={() => setHover(null)}
              color={currentRate <= (hover || rate) ? "rgb(206, 192, 4)" : "rgb(137, 137, 137)"}
              size={30}
              className="star cursor-pointer inline-block"
            ></MdStar>
          </label>
        );
      })}
      <span>thank you for {rate} star</span>
      <div className="location-text">
      <MdLocationPin className="loc-ic"></MdLocationPin><h2>Egypt || Elsharkia|| 120-70-30</h2>
      </div>
      <h2 className="visit-spr">And you can visit my simple website for <NavLink className=" link-prayer" to={"../../api"}>Prayer times</NavLink></h2>
      </motion.div>
    </div>
  );
}

export default About;