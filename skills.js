import React from "react";
import portfolio from "../../portfolio.json";
import React, { useEffect, useState } from "react";
import { BsFileEarmarkCode } from "react-icons/bs";
const Skills = () => {
  return (
    <div className="container">
      <SkillsHeader />
      <EProfile />
    </div>
  );
};
const EProfile = () => {
  return (
    <div className="skillsContainer">
      <div className="skill-container">
        <div className="skillList">
          <h3>Front End Development</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
            <span className=" subject"> OpenAI Gym </span>
            <span className="subject"> Matplotlib </span>
            <span className="subject"> LaTeX </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
          </div>
        </div>

        <div className="skillList">
          <h3>Software Development</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
            <span className=" subject"> OpenAI Gym </span>
            <span className="subject"> Matplotlib </span>
            <span className="subject"> LaTeX </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
          </div>
        </div>

        <div className="skillList">
          <h3>Machine Learing</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
            <span className=" subject"> OpenAI Gym </span>
            <span className="subject"> Matplotlib </span>
            <span className="subject"> LaTeX </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
          </div>
        </div>
        <div className="skillList">
          <h3>3D Modeler</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
            <span className=" subject"> OpenAI Gym </span>
            <span className="subject"> Matplotlib </span>
            <span className="subject"> LaTeX </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
          </div>
        </div>

        <div className="skillList">
          <h3>Video Editor</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
            <span className=" subject"> OpenAI Gym </span>
            <span className="subject"> Matplotlib </span>
            <span className="subject"> LaTeX </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <div className="skillList">
          <h3>Backend End Developer</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
            <span className=" subject"> OpenAI Gym </span>
            <span className="subject"> Matplotlib </span>
            <span className="subject"> LaTeX </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
          </div>
        </div>

        <div className="skillList">
          <h3>Functional Language</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
            <span className=" subject"> OpenAI Gym </span>
            <span className="subject"> Matplotlib </span>
            <span className="subject"> LaTeX </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
            <span className=" subject"> Python </span>
          </div>
        </div>

        <div className="skillList">
          <h3>Game Development</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
            <span className=" subject"> Keras </span>
            <span className="subject"> Scikit Learn </span>
          </div>
        </div>

        <div className="skillList">
          <h3>Graphic Designer</h3>
          <div className="subject-container">
            <span className="subject"> MATLAB </span>
            <span className="subject"> Open CV 2 </span>
            <span className="subject"> TensorFlow </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const SkillsHeader = () => {
  const [skillsHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.skillsHeader);
  }, []);
  return <div className="head">{skillsHeader}</div>;
};

export default Skills;
