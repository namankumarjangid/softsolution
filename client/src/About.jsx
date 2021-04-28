import React from "react";
import web from "../src/images/hero-img.png";
// import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="Welcome to About page"
        imgsrc={web}
        visit="/ourteam"
        btname="Our Team"
      />
    </>
  );
};

export default About;
