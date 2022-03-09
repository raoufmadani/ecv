import React from 'react';
import '../styles/professionalExperience.css';
import ExperienceItem from './ExperienceItem';
import professionalExperience from '../data/professionalExperience';

const ProfessionalExperience = () => {
    

    return (
       
        <section id="experience">
        
              <div className="container"></div>
              <div className="white-divider"></div>
              <div className="heading"><h2>Professional experience</h2></div>

              <ul className="timeline">
                {professionalExperience.map((item,index)=> <ExperienceItem
                    key={index}
                    class={item.class}
                    job={item.job}
                    company={item.company}
                    companyWebsite={item.companyWebsite}
                    date={item.date}
                    jobDescription={item.jobDescription}
                    projectName={item.projectName}
                    projectLink={item.projectLink}
                    info={item.info}
                    info2={item.info2}
                    info3={item.info3}
                    info4={item.info4}
                />)}
              </ul>
        </section>
             
    );
};

export default ProfessionalExperience;