import React from 'react';
import '../css/ProjectDetail.css'
import NavBarNavigate from './NavBarNavigate';
import NavBarAccueil from './NavBarAccueil';
import { NavLink } from 'react-router-dom';


const ProjectDetail = (props) => {
  return ( 
    <div className='ProjectDetailContainer'>
      <NavBarAccueil />
      <div className='ProjectDetail'>
        <h2>{props.name}</h2>
        <h3>{props.category}</h3>
        <img src={props.image} alt="Project pic"/>
        <p>{props.description}</p>
        <h6>{props.balance} / {props.goal} euros</h6>
        <div className='Goal'><div className='balance'></div></div>
        <NavLink to={props.link}><button>Support the project</button></NavLink>
      </div>
      <NavBarNavigate />
    </div>
   );
}
 
export default ProjectDetail;