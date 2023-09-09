import React from "react";
import { Routes, Route } from "react-router-dom";
import Project from "./routes/Project";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
