import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Tools from "../components/Tools";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Tools />
      <Education />
      <Footer />
    </div>
  );
};

export default Home;
