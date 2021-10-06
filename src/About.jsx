import React from "react";
import web from "../src/images/Luminousimage.jpg"
// import {NavLink} from "react-router-dom";
import Common from "./Common"

const About = () => {

return(
    <>
  <Common
   name="We Are Attached With" 
   add="Luminous is a powerful and trustworthy brand with a wide range of innovative products in the power backup, home electrical and residential solar space that covers, inverters Batteries, Solar solutions to home electricals offerings such as Fans, LED lighting."
   imgsrc={web} 
   visit="/contact" 
   btname="Contact Now"
    />
    </>
);

};
export default About;