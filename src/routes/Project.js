import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Projects from "../components/Projects";



const Project = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading = "Projects" text = "Some of my most recent projects!"/>
        <Projects/>
        <Footer/> 
    </div>
  )
}

export default Project