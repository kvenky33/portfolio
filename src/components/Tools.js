import React from "react";
import "./Tools.css";
import toolData from "./ToolsData";

const Tools = () => {
  return (
    <div className="tool-section">
      <h1 className="tool-heading">Tools & Technologies</h1>
      <div className="tool-container">
        {toolData.map((val, ind) => {
          return (
            <div className="tool">
              key={ind}
              <img src={val.img} alt="toolImage" className="skill" />
              <h2 style={{ color: "#fff" }}>{val.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
