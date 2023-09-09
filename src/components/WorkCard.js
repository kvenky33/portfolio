import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const WorkCard = (props) => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      gyroscope={true}
    >
      <div className="project-card">
        <img src={props.imgsrc} alt="workImage" />
        <div className="pro-head">
          <h2 className="project-title">{props.title}</h2>
          <div>
            <a href={props.repolink}>
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href={props.deploylink}>
              <FaEye size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="pro-details">
          <p>{props.text}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default WorkCard;
