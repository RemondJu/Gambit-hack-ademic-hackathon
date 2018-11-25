import React from 'react';
import '../css/ProjectDetail.css'
import NavBarNavigate from './NavBarNavigate';
import { NavLink } from 'react-router-dom';
import Comment from './Comment'
import comments from '../comments'

const ProjectDetail = (props) => {
  return ( 
    <div className='ProjectDetailContainer'>
     <img className="photoProject" src={props.image} alt="Project pic"/>
     <div className="title"><p>{props.name}<br/></p></div>
     <NavBarNavigate />
     <div className="dollar">
     <h4>3500 €</h4>
     <p>pick up</p>
     <div className='Goal'><div className='balance'></div></div>
     <p>On <span>10.000 €</span> of objectives</p>
     <p><span>27</span> Donors</p>
     <NavLink to={props.link}><button style={{backgroundColor: "#007477", borderRadius:"10px", color:"#ffffff"}}>Support the project</button></NavLink>
     </div>
     <div className="dollar1"><p>Your bank helps you to support !</p></div>
     <div className="dollar3"><p className="bankstep">Step 1 : We invest 25% of the goal.</p></div>
     <div className="dollar2"><p className="bankstep">Step 2 : We invest 50% of the goal.</p></div>
     <div className="dollar2"><p className="bankstep">Step 3 : We invest 75% of the goal.</p></div>
     <div className="dollar4"><p className="bankstep">Step 4 : We invest 1OO% of the goal.</p></div>
    </div>
   );
}
 
export default ProjectDetail;