import React from "react";

const ExperienceItem = props => {
   return (
      <li>
         <div className="timeline-badge">
            <span className="glyphicon glyphicon-briefcase gauche"></span>
         </div>
         <div className={props.class}>
            <div className="timeline-panel">
               <div className="timeline-heading">
                  <h3>{props.job}</h3>
                  <h4>
                     <a href={props.companyWebsite} alt="" style={{ "textDecoration": "none" }}>
                        {props.company}
                     </a>
                  </h4>
                  <p>
                     <small className="glyphicon glyphicon-time"></small>
                     {props.date}
                  </p>
               </div>
               <div className="timeline-body">
                  <h5>Project(s)</h5>
                  <p>
                     <a href={props.projectLink} target="_blank">
                        {props.projectName}
                     </a>
                  </p>
                  <p>
                     <a href={props.projectLink2} target="_blank">
                        {props.projectName2}
                     </a>
                  </p>
                  <p>
                     <a href={props.projectLink3} target="_blank">
                        {props.projectName3}
                     </a>
                  </p>
                  <p>
                     <a href={props.projectLink4} target="_blank">
                        {props.projectName4}
                     </a>
                  </p>
                  <h5>Task(s)</h5>
                  <p>{props.jobDescription}</p>
                  <p>{props.info}</p>
                  <p>{props.info2}</p>
                  <p>{props.info3}</p>
                  <p>{props.info4}</p>
                  <p>{props.info5}</p>
                  <p>{props.info6}</p>
                  <p>{props.info7}</p>
                  <p>{props.info8}</p>
                  <p>{props.info9}</p>
                  <p>{props.info10}</p>
                  <p>{props.info11}</p>
               </div>
            </div>
         </div>
      </li>
   );
};

export default ExperienceItem;
