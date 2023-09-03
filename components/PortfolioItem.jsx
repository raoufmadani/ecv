import React from 'react';

const PortfolioItem = props => {
    
    return (
        <div className="row">
            <div className="col-sm-4">
            <a className="thumbnail" href={props.imageLink}  target="_blank"><img src={props.image} alt={props.alt} style={{"width":"600px", "height":"260px"}} /></a>
            </div>
            <div className="col-sm-4">
            <a className="thumbnail" href={props.imageLink2} target="_blank"><img src={props.image2} alt={props.alt2} style={{"width":"600px", "height":"260px"}} /></a>
            </div>
            <div className="col-sm-4">
            <a className="thumbnail" href={props.imageLink3} target="_blank"><img src={props.image3} alt={props.alt3} style={{"width":"600px", "height":"260px"}}/></a>
            </div>
        </div>
    );

};

export default PortfolioItem;