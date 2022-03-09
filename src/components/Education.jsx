import React from 'react';
import '../styles/education.css';
import EducationItem from './EducationItem';
import education from '../data/education';

const Education = () => {
    
    return (
       
        <section id="education">
            <div className="container">
            <div className="red-divider"></div>
            <div className="heading"><h2>Education</h2></div>  
            
                <div className="row">
                    
               {education.map ((item,index) => <EducationItem
                key={index}
                date={item.date}
                provider={item.provider}
                diploma={item.diploma}
                diplomaLink={item.diplomaLink}
                info1={item.info1}
                info2={item.info2}
                info3={item.info3}
                infoLink1={item.infoLink1}
                infoLink2={item.infoLink2}
                infoLink3={item.infoLink3}
                />)}
                    
                </div>
            </div>
      </section>
  
        
    );

};

export default Education;