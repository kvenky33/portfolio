import React from "react";
import "./Hero2.css";
import { HiChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";
const Hero2 = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <motion.div
          className="key-con"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        >
          <HiChevronDoubleDown
            style={{
              backgroundColor: "#fff",
              borderRadius: "0.5rem",
              width: "2.5rem",
              height: "2.5rem",
              marginTop: "15px",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero2;
