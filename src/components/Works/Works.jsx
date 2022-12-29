 import React, { useContext } from "react";
import "./Works.css";
import bootstrap from "../../img/bootstrap.png";
import react from "../../img/react.png";
import js from "../../img/js.png";
import css3 from "../../img/css3.png";
import html5 from "../../img/html5.png"
import nodejs from "../../img/nodejs.png"
import mongodb from "../../img/mongodb.png"
import php from "../../img/php.png"
import mysql from "../../img/mysql.png"
import expressjs from "../../img/expressjs.png"



import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <><div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            What Skills I Have
          </span>
          <span>My Experience</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
    
        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={bootstrap} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={html5} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={css3} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="  w-backCircle yellowCircle"></div>
      </div>

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongodb} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={php} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={mysql} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={expressjs} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      
    </div>
    
    
    
    
    </>

  );
};

export default Works;
