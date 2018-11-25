import React from 'react';
import '../css/ProjectDetail.css'
import NavBarNavigate from './NavBarNavigate';
import { NavLink } from 'react-router-dom';
import Comment from './Comment'
import comments from '../comments'

const ProjectDetail = (props) => {
  return ( 
    <div className='ProjectDetailContainer'>
      <div className='ProjectDetail'>
        <h2>{props.name}</h2>
        <h3>{props.category}</h3>
        <img src={props.image} alt="Project pic"/>
        <p>{props.description}</p>
        <h6>{props.balance} / {props.goal} euros</h6>
        <div className='Goal'><div className='balance'></div></div>
        <NavLink to={props.link}><button>Support the project</button></NavLink>
        <h3>Your bank helps you to support !</h3>
        <ul>
          <li className="bankstep">Step 1 : We invest 25% of the goal.</li>
          <li className="bankStepToGo">Step 2 : We invest 50% of the goal.</li>
          <li className="bankStepToGo">Step 3 : We invest 75% of the goal.</li>
          <li className="bankStepToGo">Step 4 : We invest 100% of the goal.</li>
        </ul>
        <h4>Comments :</h4>
        {comments.map(comment => <Comment key={comment.id} text={comment.body}/>)}
      </div>
      <NavBarNavigate />
      
      
    </div>
   );
}
 
export default ProjectDetail;