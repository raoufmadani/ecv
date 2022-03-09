import React from 'react';



const InternshipBlock = props => {
    
    return (
            <div className="internship-block">
                <h5>{props.date}</h5>
                <img src={props.source} alt="Craiova" height={props.height} width={props.width} />
                <h3>{props.city}</h3>
                <h4>{props.workType}</h4>
                <div className="red-divider"></div>
                <p>{props.certificate}</p>
                <p><a href={props.companyWebsite} target="_blank">{props.company}</a></p>
                <p><a href={props.projectWebsite} target="_blank">{props.project}</a></p>
                <p><i>{props.progLanguages}</i></p>
                <p><a href={props.collaboratorWebsite} target="_blank">{props.collaborator}</a></p>
                <h6>{props.sponsor}</h6>
            </div> 
    );

};

export default InternshipBlock;