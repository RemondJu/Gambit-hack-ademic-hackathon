import React, { Component } from 'react'
import NavBarAccueil from './NavBarAccueil';
import Progress from './Progress';
import NavBarNavigate from './NavBarNavigate';
import ProjectCard from './ProjectCard';
import '../css/Container.css';
import Filters from './Filters';

class Container extends Component {
  render() {
    return (
      <div className='Container'>
        <NavBarAccueil/>
        <Filters 
        filterChoice={this.props.filterChoice}
        />
        <Progress/>
        <NavBarNavigate/>
        <div className='cardContainer'>
        {this.props.projects.filter(project => project.category === this.props.filter).map(project => {
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