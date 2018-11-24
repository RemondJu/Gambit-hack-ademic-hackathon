import React, { Component } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/ProjectCard.css'

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className='ProjectCard'>
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.type}</CardSubtitle>
          </CardBody>
          <img width="100%" src={this.props.image} alt="project funding" />
          <CardBody>
            <CardText>{this.props.description.split(',').splice(0, 2).join('')+'.'}</CardText> 
            <NavLink to={this.props.path}>
              <Button>See more about it</Button>
            </NavLink>
          </CardBody>
        </Card>
      </div>
     );
  }
}
 
export default ProjectCard;