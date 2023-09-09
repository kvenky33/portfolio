import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import AboutContent from "../components/AboutContent";
import Education from "../components/Education";

const About = () => {
  return (
    <div>
      <Nav />
      <Hero2 heading="ABOUT" text="I am afriendly frontend developer" />
      <AboutContent />

      <Education />

      <Footer />
    </div>
  );
};

export default About;
