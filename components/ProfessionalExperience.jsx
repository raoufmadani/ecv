import React from "react";
import "../styles/professionalExperience.css";
import ExperienceItem from "./ExperienceItem";
import professionalExperience from "../data/professionalExperience";

const ProfessionalExperience = () => {
   return (
      <section id="experience">
         <div className="container"></div>
         <div className="white-divider"></div>
         <div className="heading">
            <h2>Professional experience</h2>
         </div>

         <ul className="timeline">
            {professionalExperience.map((item, index) => (
               <ExperienceItem
                  key={index}
                  class={item.class}
                  job={item.job}
                  company={item.company}
                  companyWebsite={item.companyWebsite}
                  date={item.date}
                  jobDescription={item.jobDescription}
                  projectName={item.projectName}
                  projectLink={item.projectLink}
                  projectName2={item.projectName2}
                  projectLink2={item.projectLink2}
                  projectName3={item.projectName3}
                  projectLink3={item.projectLink3}
                  projectName4={item.projectName4}
                  projectLink4={item.projectLink4}
                  info={item.info}
                  info2={item.info2}
                  info3={item.info3}
                  info4={item.info4}
                  info5={item.info5}
                  info6={item.info6}
                  info7={item.info7}
                  info8={item.info8}
                  info9={item.info9}
                  info10={item.info10}
               />
            ))}
         </ul>
      </section>
   );
};

export default ProfessionalExperience;
