import React from "react";
import portfolio from "../../portfolio.json";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { BsBookFill } from "react-icons/bs";

const Education = () => {
  return (
    <div className="container">
      <EducationHeader />
      <EProfile />
      <div class="edication-header">
        <span className="education-icon">
          {/* <i className="e-icon">
            <BsBookFill />
          </i> */}
        </span>

        {/* <div className=""></div> */}
      </div>
    </div>
  );
};
/*use this code */
// const EProfile = () => {
//   const [pageheader, setData] = useState(null);
//   useEffect(() => {
//     setData(portfolio.pageheader);
//   }, []);
//   return (
//     <div className="university-item">
//       <h6>{pageheader}</h6>
//     </div>
//   );
// };

// const EProfile = () => {
//   return (
//     <div className="university">
//       <div className="university-item">
//         <h6 className="degree">
//           Masters in Signal Processing and Machine Learning
//         </h6>
//         <p className="year">2019 -2021</p>
//       </div>
//       <p className="university-location">University Of Malta,Msida (Malta)</p>
//       <p className="university-about">
//         The Master's program concentrates on the creation and execution of
//         signal processing and machine learning systems. Signal processing
//         involves the utilisation of mathematical techniques to extract and
//         manipulate information from signals, and machine learning utilises
//         trained models to identify patterns in data.
//       </p>

//       <div className="subject-container">
//         <span className="subject"> MATLAB </span>
//         <span className="subject"> Open CV 2 </span>
//         <span className="subject"> TensorFlow </span>
//         <span className=" subject"> Keras </span>
//         <span className="subject"> Scikit Learn </span>
//         <span className=" subject"> OpenAI Gym </span>
//         <span className="subject"> Matplotlib </span>
//         <span className="subject"> LaTeX </span>
//         <span className=" subject"> Python </span>
//       </div>
//       <div className="university-item">
//         <h6>Bachelor of Science (Honours) (Computing Science)</h6>
//         <p className="year">2016 - 2019</p>
//       </div>
//       <p className="university-location">University Of Malta,Msida (Malta)</p>
//       <p>
//         The Computing Science Degree program emphasises providing both
//         scientific and practical skills to build, analyse, and sustain complex
//         software systems.
//       </p>
//       <div className="subject-container">
//         <span className="subject"> HTML </span>
//         <span className="subject"> CSS </span>
//         <span className="subject"> JavaScript </span>
//         <span className="subject"> Bootstrap Framework </span>
//         <span className="subject"> React Framework </span>
//         <span className="subject"> Node.js </span>
//         <span className="subject"> MySQL </span>
//         <span className="subject"> Ethereum Contracts </span>
//         <span className="subject"> Java </span>
//         <span className="subject"> C </span>
//         <span className="subject"> C++ </span>
//         <span className="subject"> LLVM </span>
//         <span className="subject"> LaTeX </span>
//         <span className="subject"> VHDL </span>
//         <span className="subject"> MATLAB </span>
//         <span className="subject"> Haskell </span>
//         <span className="subject"> Erlang </span>
//         <span className="subject"> Golang </span>
//         <span className="subject"> GitHub </span>
//         <span className="subject"> GitFlow </span>
//         <span className="subject"> Jenkins </span>
//         <span className="subject"> Xilinx </span>
//         <span className="subject"> Wireshark </span>
//         <span className="subject"> SPSS </span>
//       </div>

//       <div className="university-item">
//         <h6>Professional Diploma in Digital Marketing</h6>
//         <p className="year">2016 - 2016</p>
//       </div>
//       <p className="university-location">
//         Digital Marketing Institute, Leinster (Ireland)
//       </p>
//       <p>The Diploma in Digital Marketing involved of 9 Modules which are:</p>
//       <ul className="two-columns">
//         <li> Introduction to Digital Marketing </li>
//         <li> Search Engine Optimisation </li>
//         <li> Pay Per Click Advertising </li>
//         <li> Email Marketing </li>
//         <li> Digital Display Marketing </li>
//         <li> Mobile Marketing </li>
//         <li> Social Media Marketing </li>
//         <li> Analytics </li>
//         <li> Strategy and Planning </li>
//       </ul>

//       <div className="university-item">
//         <h6>Post Secondary School</h6>
//         <p className="year">2014 - 2016</p>
//       </div>
//       <p className="university-location">
//         Giovanni Curmi Higher Secondary School, Naxxar (Malta)
//       </p>

//       <ul>
//         <li> A Levels - Computing, Pure Maths</li>
//         <li>
//           Intermediates - Physics, Marketing, English, System Of Knowledge
//         </li>
//       </ul>

//       <div className="university-item">
//         <h6>Secondary School</h6>
//         <p className="year">2009 - 2014</p>
//       </div>
//       <p className="university-location">
//         Saint Aloysius College, Birkirkara (Malta)
//       </p>
//       <ul>
//         <li>
//           O Levels - Maltese, English, Maths, Physics, Religion, Computing,
//           Graphical Communication, Sports Education, ECDL Standard Leve
//         </li>
//       </ul>
//     </div>
//   );
// };

const EProfile = () => {
  const [university, setuniversity] = useState([]);
  useEffect(() => {
    setuniversity(portfolio.university);
  }, []);
  return (
    <div className="university-container">
      {(() => {
        const arr = [];
        for (let i = 0; i < university.length; i++) {
          const item = university[i];
          arr.push(
            <div key={i + 1} className="university-item">
              <div className="university">
                <h6 className="degree">{item.degree}</h6>
                <p className="year">{item.year}</p>
              </div>
              <div>
                <p className="university-location">
                  {item.university_location}
                </p>
                <p className="university-about">{item.university_about}</p>
              </div>
              <div className="subject-container">
                {(() => {
                  const subjectArr = [];
                  for (let j = 0; j < (item.subject || []).length; j++) {
                    const subject = item.subject[j];
                    subjectArr.push(
                      <span key={j} className="subject">
                        {subject}
                      </span>
                    );
                  }

                  return subjectArr;
                })()}
              </div>
              <div className="project-container">
                {(() => {
                  const projectArr = [];
                  for (let k = 0; k < (item.project || []).length; k++) {
                    const project = item.project[k];
                    projectArr.push(
                      <li key={k} className="project">
                        {project}
                      </li>
                    );
                  }

                  return projectArr;
                })()}
              </div>
            </div>
          );
        }
        return arr;
      })()}
    </div>
  );
};
const EducationHeader = () => {
  const [educationHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.educationHeader);
  }, []);
  return <div className="head">{educationHeader}</div>;
};

export default Education;
