import React from 'react';
import '../styles/footer.css';


const Footer = () => {
   const and = '&';
    return (
       
       <footer className='text-center'>
        <a href="#about">
        <span className="glyphicon glyphicon-chevron-up"></span>
        </a>
        <h5>© Online CV 2017-2022 <br/><br/>Developped by <font color="#d82c2e">ME</font><br/><br/>Using <font color="#d82c2e">React {and} Bootstrap</font></h5>
       </footer>
        
    );

};

export default Footer;