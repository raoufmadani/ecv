import React from 'react';


const ExperienceItem = props => {
    
    return (
       
        <li>
            <div className="timeline-badge"><span className="glyphicon glyphicon-briefcase gauche"></span></div>
                <div className={props.class}>

                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h3>{props.job}</h3>
                            <h4><a href={props.companyWebsite} alt="" style={{"textDecoration":"none"}}>{props.company}</a></h4>
                            <p><small className="glyphicon glyphicon-time"></small>{props.date}</p>     
                        </div>
                        <div className="timeline-body">
                            <p>{props.jobDescription}</p>
                            <p><a href={props.projectLink} target="_blank">{props.projectName}</a></p>
                            <p>{props.info}</p>
                            <p>{props.info2}</p>
                            <p>{props.info3}</p>
                            <p>{props.info4}</p>
                        </div>     
                    </div>

                </div>
        </li>
  
        
    );

};

export default ExperienceItem;