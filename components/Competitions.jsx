import React from 'react';
import '../styles/internships.css';
import competition from '../data/competition';
import Competition from '../components/Competition';

const Competitions = () => {
    

    return (
       
        <section id="competitions">
        <div className="container">
        <div className="grey-divider"></div>
        <div className="heading"><h2>Challenges {'&'} Competitions</h2></div>    
        <div className="row">
            <div className="col-md-6">
               <Competition 
                date ={competition[0].date}
                image ={competition[0].image}
                height ={competition[0].height}
                width ={competition[0].width}
                alt ={competition[0].alt}
                city ={competition[0].city}
                challenge ={competition[0].challenge}
                ranking ={competition[0].ranking}
                project ={competition[0].project}
                eventLink ={competition[0].eventLink}
                event ={competition[0].event}
                sponsor ={competition[0].sponsor}
               />
            </div> 
             <div className="col-md-6">
                <Competition 
                date ={competition[1].date}
                image ={competition[1].image}
                height ={competition[1].height}
                width ={competition[1].width}
                alt ={competition[1].alt}
                city ={competition[1].city}
                challenge ={competition[1].challenge}
                ranking ={competition[1].ranking}
                project ={competition[1].project}
                eventLink ={competition[1].eventLink}
                event ={competition[1].event}
                sponsor ={competition[1].sponsor}
                />
            </div> 
        </div>
      
       
        </div>
        </section>
             
    );
};

export default Competitions;