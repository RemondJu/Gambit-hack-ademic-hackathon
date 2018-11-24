import React, { Component } from 'react'
import NavBarAccueil from './NavBarAccueil';
import Progress from './Progress';
import NavBarNavigate from './NavBarNavigate';
import ProjectCard from './ProjectCard';
import '../css/Container.css';

class Container extends Component {
  render() {
    return (
      <div className='Container'>
        <NavBarAccueil/>
        <Progress/>
        <NavBarNavigate/>
        <div className='cardContainer'>
        {this.props.projects.map(project => {
            return <ProjectCard 
              key={project.id}
              name={project.name}
              category={project.category}
              description={project.description}
              image={project.image}
              path={`/project-detail/${project.id}`}
            />
        })}
        </div>
      </div>
    )
  }
}

export default Container;