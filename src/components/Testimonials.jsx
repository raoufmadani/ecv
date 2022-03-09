import React from 'react';
import '../styles/testimonial.css';
import Testimonial from './Testimonial';
import testimonial from '../data/testimonial';

const Testimonials = () => {
    
    return (
       
        <section id="testimonials" style={{"background":"#333"}}>
            
            
        <div className="container">
            <div className="white-divider"></div>
       <div className="heading"><h2><span style={{"color":"#fff"}}>TESTIMONIALS</span></h2></div>
            <div className="row">
                <div className="col-sm-12">
                    
                    <div id="carousel-testimonials" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators cr">
                            <li data-target="#carousel-testimonials" data-slide-to="0" className="active"></li>
                             <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                             <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                             <li data-target="#carousel-testimonials" data-slide-to="3"></li>
                             <li data-target="#carousel-testimonials" data-slide-to="4"></li>
                             <li data-target="#carousel-testimonials" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                           {testimonial.map( (item,index)=> index===0 ? <Testimonial key={index} class={item.class} authorImage={item.authorImage} alt={item.alt} author={item.author} job={item.job} content={item.content}/> : <Testimonial key={index} class={item.class} authorImage={item.authorImage} alt={item.alt} author={item.author} job={item.job} content={item.content}/> ) }
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
      </section>     
    );

};

export default Testimonials;