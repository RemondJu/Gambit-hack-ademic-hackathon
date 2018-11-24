import React from 'react';
import '../css/ProjectDetail.css'


const ProjectDetail = (props) => {
  return ( 
    <div className='ProjectDetail'>
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <img src={props.image} alt="Project pic"/>
      <p>{props.description}</p>
      <h6>{props.money} / {props.goal} euros</h6>
    </div>
   );
}
 
export default ProjectDetail;