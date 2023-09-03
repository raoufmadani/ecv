import React from 'react';
import '../styles/contact.css';
import Form from './Form';

const Contact = () => {
    
    return (
       
        <section id="contact">
             <div className="container">
            <div className="white-divider"></div>
            <div className="heading">
                <h2><span style={{"color": "#fff"}}>Contact</span></h2>
            </div>
                
           <div className="row">
               <div className="col-lg-10 col-lg-offset-1">
                   <Form
                   
                   
                   />
                </div>
           </div>
        </div>
        </section>
  
        
    );

};

export default Contact;