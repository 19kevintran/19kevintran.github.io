import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Projects from "../components/Projects";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Projects/>
      <Footer />
    </div>
  );
};

export default Home;
