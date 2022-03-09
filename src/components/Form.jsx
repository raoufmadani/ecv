import React, {useState} from 'react';
import '../email/send.php';

const Form = props => {
    
   /*const [info,setInfo]= useState({
       firstName:"",
       lastName:"",
       email:"",
       phone:"",
       message:""
   });*/


  /* const changeHandler = event=>{
        const {name,value}= event.target;

        setInfo(prevValue => ({...prevValue,[name]:value}));

   };*/


    return (
        <form id="contact-form" method="post" action="" role="form">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="firstname">First name *</label>
                    <input id="firstname" type="text" name="firstname" className="form-control" placeholder="Your first name"  />
                    <p className="comments"></p>
                </div>
                <div className="col-md-6">
                    <label htmlFor="name">Last name *</label>
                    <input id="name" type="text" name="name" className="form-control" placeholder="Your last name" />
                    <p className="comments"></p>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email">Email *</label>
                    <input id="email" type="text" name="email" className="form-control" placeholder="Your email"  />
                    <p className="comments"></p>
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" name="phone" className="form-control" placeholder="Your phone" />
                    <p className="comments"></p>
                </div>
                <div className="col-md-12">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" className="form-control" placeholder="Your Message" rows="4" ></textarea>
                    <p className="comments"></p>
                </div>
                <div className="col-md-12">
                    <p ><strong>* These information are required.</strong></p>
                </div>
                <div className="col-md-12">
                    <input type="submit" className="button1" value="Send" />
                </div>    
            </div>
        </form>
        
    );

};

export default Form;