import React from 'react';
import '../styles/skills.css';
import Skill from './Skill';
import progLanguages from '../data/proglanguages';

const Skills = () => {
    
    return (
       
        <section id="skills">
        <div className="red-divider"></div>
        <div className="heading"><h2>Skills</h2></div>
        <div className="container">    
         <div className="row">
            
            <div className="col-md-6">
               {progLanguages.slice(1,15).map((item,index)=> <Skill key={index} language={item}/>)}
            </div>   
            
            <div className="col-md-6">
              {progLanguages.slice(15,29).map((item,index)=> <Skill key={index} language={item}/>)}
            </div>
        </div>
        </div>
        </section>
  
        
    );

};

export default Skills;