import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Nav />
      <Hero2 heading="PROJECTS" text="some of my most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
