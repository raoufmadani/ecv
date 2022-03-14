import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/portfolio';
import "../styles/portfolio.css";


const Portfolio = () => {
    
    return (
        <section id="portfolio">
        <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
        <h2>Portfolio</h2>
        </div>
        
         {portfolioData.map((item,index) => <PortfolioItem key={index} imageLink={item.imageLink} image={item.image} alt={item.alt} imageLink2={item.imageLink2} image2={item.image2} alt2={item.alt2} imageLink3={item.imageLink3} image3={item.image3} alt3={item.alt3} />)}
     
        </div>
    </section>
      
  
        
    );

};

export default Portfolio;




        