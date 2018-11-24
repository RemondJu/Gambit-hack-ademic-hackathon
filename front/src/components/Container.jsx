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
        resetFilter={this.props.resetFilter}
        rangeChoice={this.props.rangeChoice}
        rangeFilter={this.props.rangeFilter}
        />
        <Progress/>
        <NavBarNavigate/>
        <div className='cardContainer'>
        {this.props.toggleFilter ? this.props.projects.filter(project => {
          if(this.props.toggleFilter){
            if(this.props.rangeFilter !== 100){
              return ((project.category === this.props.filter)&&(project.distance <= this.props.rangeFilter))
            } else {
              return (project.category === this.props.filter)
            }
          } else if (this.props.rangeFilter !== 100){
            if (this.props.toggleFilter){
              return ((project.category === this.props.filter)&&(project.distance <= this.props.rangeFilter))
            } else {
              return (project.distance <= this.props.rangeFilter)
            }
          }
        }).map(project => {
            return <ProjectCard 
              key={project.id}
              name={project.name}
              category={project.category}
              description={project.description}
              image={project.image}
              path={`/project-detail/${project.id}`}
            />
        }) : this.props.projects.filter(project => project.distance <= this.props.rangeFilter).map(project => {
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