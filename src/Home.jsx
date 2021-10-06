import React from "react";
import web from "../src/images/Luminous.jpg"
// import {NavLink} from "react-router-dom";
import Common from "./Common";

const Home = () => {

return(
    <>
<Common
   name="Decorate Your Home With" 
   add="Join The Battle To Save The Environment"
   imgsrc={web} 
   visit="/service" 
   btname="Our Services"
    />
    </>
);

};
export default Home;