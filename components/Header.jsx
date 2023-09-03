import React from 'react';
import '../styles/header.css';


const Header = () => {

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#monMenu">
                <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            </div>
            
            <div className="collapse navbar-collapse" id="monMenu" >
                <ul className="nav navbar-nav">
                    <li><a href="#about">Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#internships">Internship</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#competitions">Challenges</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>
            </div>
        </div>
            
            </nav>
    );

};

export default Header;