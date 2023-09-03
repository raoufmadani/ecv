import React from 'react';



const Skill = props => {
    const width = {'width': '100%'};
    return (
       
              <div className="progress">
                 <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={width}><h5>{props.language}</h5> </div>
             </div>
             
    );

};

export default Skill;