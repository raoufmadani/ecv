import React from 'react';

const Competitions = props => {
    

    return (
     
            <div className="competition-block">
                <h5>{props.date}</h5>
                <img src={props.image} alt={props.alt} height={props.height} width={props.width} />
                <h3>{props.city}</h3>
                <h4>{props.challenge}</h4>
                <div className="red-divider"></div>
                <p>{props.ranking}</p>
                <p>{props.project}</p>
                <p><a href={props.eventLink} target="_blank">{props.event}</a> </p>
                <h6>{props.sponsor}</h6>
            </div>
             
    );
};

export default Competitions;