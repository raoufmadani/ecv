import React from 'react';
import '../styles/internships.css';
import internship from '../data/internship';
import InternshipBlock from './InternshipBlock';


const Internships = () => {
    
    return (
       
        <section id="internships">
        <div className="container">
        <div className="grey-divider"></div>
        <div className="heading"><h2>International Volunteer<br/>experiences {'&'} Internships</h2></div>    
        <div className="row">
            <div className="col-md-6">
             <InternshipBlock
                date={internship[0].date}
                height={internship[0].height}
                width={internship[0].width}
                source={internship[0].imageSource}
                city={internship[0].city}
                workType={internship[0].workType}
                certificate={internship[0].certificate}
                company={internship[0].company}
                sponsor={internship[0].sponsor}
             />
            </div> 
             <div className="col-md-6">
             <InternshipBlock
               date={internship[1].date}
               height={internship[1].height}
               width={internship[1].width}
               source={internship[1].imageSource}
               city={internship[1].city}
               workType={internship[1].workType}
               certificate={internship[1].certificate}
               company={internship[1].company}
               sponsor={internship[1].sponsor}
             />
            </div> 
        </div>
        <div className="row">
            <div className="col-md-6">
            <InternshipBlock
              date={internship[2].date}
              height={internship[2].height}
              width={internship[2].width}
              source={internship[2].imageSource}
              city={internship[2].city}
              workType={internship[2].workType}
              certificate={internship[2].certificate}
              company={internship[2].company}
              companyWebsite={internship[2].companyWebsite}
              sponsor={internship[2].sponsor}
              project={internship[2].project}
              projectWebsite={internship[2].projectWebsite}
              collaborator={internship[2].collaborator}
              collaboratorWebsite={internship[2].collaboratorWebsite}
              progLanguages={internship[2].progLanguages}
            />
            </div>
            
             <div className="col-md-6">
             <InternshipBlock
               date={internship[3].date}
               height={internship[3].height}
               width={internship[3].width}
               source={internship[3].imageSource}
               city={internship[3].city}
               workType={internship[3].workType}
               certificate={internship[3].certificate}
               company={internship[3].company}
               companyWebsite={internship[3].companyWebsite}
               sponsor={internship[3].sponsor}
               project={internship[3].project}
               projectWebsite={internship[3].projectWebsite}
               collaborator={internship[3].collaborator}
               progLanguages={internship[3].progLanguages}
             />
            </div>
        </div>
        </div>
        </section>
  
        
    );

};

export default Internships;