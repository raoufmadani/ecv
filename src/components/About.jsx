import React from 'react';
import '../styles/about.css';
import raoufimage from '../images/newraoufimage.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import cvfile from '../files/Abderraouf_Madani_CV.pdf';

const About = () => {
    const and = '&';
    return (
       
        <section id="about" className="container-fluid">
        
            <div className="col-xs-12 col-md-6 col-lg-6 profile-picture">
                <img src={raoufimage} alt="Raouf" className="img-circle" style={{"backgroundColor":"blue"}} /> 
                <div className="heading">
                    <h1>Hello it's me Raouf</h1>
                </div>
            </div>
                <div className="col-xs-12 col-md-6 col-lg-6 info">
                <div className="heading">
                    <div id="intro">
                        <h3>Information</h3>
                        <div className="white-divider"></div>
                        <br/>
                        <p>Full Name: Ahmed Abderraouf MADANI</p>
                        <p style={{"color":"#fff"}}>Javascript Full-Stack developer</p>
                        <p>Recently: Winner of Algeria Startup Challenge 2020</p>
                        <p>Diploma: Master Degree in Software Engineering</p> 
                        <p>Date {and} Place of Birth: 20/09/1995 Blida, Algeria</p>
                        <p>Marital status: Married</p>
                        <p>Whatsapp: +213540757115</p>
                        <p>Email: raoufmadani@ayoungleader.com</p>
                        <a href="https://www.linkedin.com/in/raoufmadani/" target="_blank"><img src={linkedin} /></a> <a href="https://github.com/raouf-madani/" target="_blank"><img src={github} /></a><br/>
                        <a href={cvfile} className="button1">Download CV</a>
                    </div>         
                </div>                
           </div>
       </section>
        
    );

};

export default About;