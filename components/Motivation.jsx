import React from 'react';
import '../styles/motivation.css';
import Itemotivation from './Itemotivation';
import motivation from '../data/motivation';

const Motivation = () => {
    

    return (
       
        <section id="motivation">
        <div className="container">
           <div className="red-divider"></div>
           <div className="heading"><h2>Motivation</h2></div>
           <div id="monCarousel" className="carousel slide text-center" data-ride="carousel">
            
               <ol className="carousel-indicators">
                 <li data-target="#monCarousel" data-slide-to="0"></li>
                 <li data-target="#monCarousel" data-slide-to="1" className="active"></li>
                 <li data-target="#monCarousel" data-slide-to="2"></li>
                 <li data-target="#monCarousel" data-slide-to="3"></li>
                 <li data-target="#monCarousel" data-slide-to="4"></li>
                 <li data-target="#monCarousel" data-slide-to="5"></li>
               </ol>
            <div className="carousel-inner" role="listbox">
              {motivation.map((item,index)=> index===0 ?<Itemotivation key={index} class="item active" name={item.name} description={item.description} /> : <Itemotivation key={index} class="item"  name={item.name} description={item.description} />)}
            </div>
             
            <a href="#monCarousel" className="left carousel-control" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            </a>     
             <a href="#monCarousel" className="right carousel-control" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            </a>  
               
          </div> 
        </div>
       </section>
             
    );
};

export default Motivation;