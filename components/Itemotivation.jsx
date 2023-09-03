import React from 'react';

const Itemotivation = props => {

    return (
        <div className={props.class}>
        <h3>{props.description}</h3>
        <h4>{props.name}</h4>    
        </div>
    );
};

export default Itemotivation;