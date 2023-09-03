import React from 'react';
import bubble from '../imagescv/bubble.png';

const Testimonial = props => {
    
    return (
       
        <div className={props.class}>
                <img src={props.authorImage} className="center-block" alt={props.alt}/>
                <h2 style={{"color":"white"}}>{props.author}</h2>
                <h4 style={{"color":"#C0C0C0"}}>{props.job}</h4>
                
            <blockquote className="blockquote">
                <span className="bubble"><img src={bubble} /></span>
                {props.content}
            </blockquote>
       </div>
  
        
    );

};

export default Testimonial;