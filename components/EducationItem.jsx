import React from 'react';

const EducationItem = props => {
    
    return (
       
        <div className="col-sm-4">
            <div className="education-block">
            <h5>{props.date}</h5>
            <span className="glyphicon glyphicon-education"></span>
            <h3>{props.provider}</h3>
            <h4><a href={props.diplomaLink} target="_blank">{props.diploma}</a></h4>
            <div className="red-divider"></div>
                <p><a href={props.infoLink1} target="_blank">{props.info1}</a></p>
                <p><a href={props.infoLink2} target="_blank">{props.info2}</a></p>
                <p><a href={props.infoLink3} target="_blank">{props.info3}</a></p>
            </div>
       </div>
  
        
    );

};

export default EducationItem;