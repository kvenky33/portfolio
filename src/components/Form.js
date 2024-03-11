import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [chatData, setChatData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setChatData({ ...chatData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (
      chatData.name !== "" &&
      chatData.email !== "" &&
      chatData.subject !== "" &&
      chatData.message !== ""
    ) {
      axios
        .post(
          "https://sampledb-73285-default-rtdb.firebaseio.com/client.json",
          chatData
        )
        .then(() => toast.success("Your Message recorded succesfully!"));
      setChatData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Fill all fields");
    }
  };
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={chatData.name}
          onChange={handleChange}
        ></input>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={chatData.email}
          onChange={handleChange}
        ></input>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={chatData.subject}
          onChange={handleChange}
        ></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
          value={chatData.message}
          onChange={handleChange}
        />
      </form>
      <button className="btn btn-form" onClick={handleSubmit}>
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};

export default Form;
