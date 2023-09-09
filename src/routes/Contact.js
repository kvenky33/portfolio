import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Nav />
      <Hero2 heading="CONTACT" text="lets have achat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
