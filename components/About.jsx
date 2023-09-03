import React from "react";
import "../styles/about.css";
import raoufimage from "../imagescv/newraoufimage.jpg";
import linkedin from "../imagescv/linkedin.png";
import github from "../imagescv/github.png";
import cvfile from "../files/Abderraouf_Madani_CV.pdf";

const About = () => {
   return (
      <section id="about" className="container-fluid">
         <div className="col-xs-12 col-md-6 col-lg-6 profile-picture">
            <img src={raoufimage} alt="Raouf" className="img-circle" style={{ "backgroundColor": "blue" }} />
            <div className="heading">
               <h1>Hello it's me Raouf</h1>
            </div>
         </div>
         <div className="col-xs-12 col-md-6 col-lg-6 info">
            <div className="heading">
               <div id="intro">
                  <h3>Information</h3>
                  <div className="white-divider"></div>
                  <br />
                  <p>
                     Software developer at{" "}
                     <a
                        href="https://chronoinnovation.com"
                        target="_blank"
                        color="#fff"
                        style={{ textDecoration: "underline" }}
                     >
                        Chrono Innovation
                     </a>
                  </p>
                  <p>
                     Consultant full-stack developer at{" "}
                     <a href="https://garda.com" target="_blank" color="#fff" style={{ textDecoration: "underline" }}>
                        Garda World
                     </a>
                  </p>
                  <p>
                     Winner of{" "}
                     <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:6765546695582388224/"
                        target="_blank"
                        color="#fff"
                        style={{ textDecoration: "underline" }}
                     >
                        Algeria Startup Challenge 2020
                     </a>
                  </p>
                  <p>27yo, Master Degree in Software Engineering</p>
                  <p>Montreal, Quebec, Canada</p>
                  <p>Whatsapp: +15142625830</p>
                  <p>Email: raoufmadani@live.fr</p>
                  <a href="https://www.linkedin.com/in/raoufmadani/" target="_blank">
                     <img src={linkedin} />
                  </a>{" "}
                  <a href="https://github.com/raoufmadani/" target="_blank">
                     <img src={github} />
                  </a>
                  <br />
                  <a href={cvfile} className="button1">
                     Download CV
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
