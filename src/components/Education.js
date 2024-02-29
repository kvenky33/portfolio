import React from "react";
import "./Education.css";

let workExperience = [
  {
    company: "REESAN Info Tech",
    role: "Web Developer Intern",
    duration: "01/11/2023 - present",
    responsibility:
      "Led the development of responsive websites, guaranteeing seamless user experiences across various devices.Utilized industry-leading frameworks and libraries such as React.js and Bootstrap to design dynamic and visually appealing web solutions.",
  },
];

let educationData = [
  {
    degree: "Bachelor of Science",
    instituute: "S.V Arts college,Tirupati",
    duration: " 06/2018-09/2021",
    marks: " 7.8",
    course: " M.P.E",
  },
  {
    degree: "Intermediate",
    instituute: "Srinivasa junior college,vidyanagr",
    duration: " 06/2016-04/2018",
    marks: " 963",
    course: " M.P.c",
  },
  {
    degree: "S.S.C",
    instituute: "Balabharathi EM high school,vidyanagar",
    duration: " 06/2015-04/2016",
    marks: " 9.5",
    course: " S.S.C",
  },
];

let certificateData = [
  {
    title: "Build Responsive Real-World Websites with HTML and CSS ",
    description:
      "Taken a course in Udemy on Build Responsive Real-World Websites with HTML and CSS. In that course I learned how to build responsive web designs.",
    link: "https://www.udemy.com/certificate/UC-c6257d0f-4c0f-4b39-af68-a305b5570ba4/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email",
  },
  {
    title: "Free JavaScript and React.js Essentials Bootcamp ",
    description:
      "participated in the five days javascrpit and React.js free bootcamp conducted by Lets Upgrade and got certified.",
    link: "https://verify.letsupgrade.in/certificate/LUERJSSEP122883",
  },
  {
    title: "Free Javascript Programming Essentials Bootcamp ",
    description:
      "participated in the five days javascrpit free bootcamp conducted by Lets Upgrade and got certified.",
    link: "https://verify.letsupgrade.in/certificate/LUEJSSEP122700",
  },
];
const Education = () => {
  return (
    <>
      <div className="section work-experience">
        <h1>Work Experience</h1>

        {workExperience.map((val) => {
          return (
            <div className="data-part">
              <h2>{val.company}</h2>
              <h3>{val.role}</h3>
              <p>{val.duration}</p>
              <p>{val.responsibility}</p>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="section">
          <h1>Education</h1>

          {educationData.map((val) => {
            return (
              <div className="data-part">
                <h2>{val.degree}</h2>
                <h4>{val.instituute}</h4>
                <p>
                  {val.duration}
                  <br />
                  Course:{val.course}
                  <br />
                  CGPA/Marks: {val.marks}
                </p>
              </div>
            );
          })}
        </div>
        <div className="section">
          <h1>Certificates</h1>
          {certificateData.map((data) => {
            return (
              <div className="data-part">
                <h2>{data.title} </h2>
                <p>{data.description}</p>
                <a
                  href={data.link}
                  className="view"
                  target="_blank"
                  rel="noreferrer"
                >
                  view
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;
