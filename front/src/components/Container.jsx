import React, { Component } from 'react'
import NavBarAccueil from './NavBarAccueil';
import Progress from './Progress';
import NavBarNavigate from './NavBarNavigate';

class Container extends Component {
  render() {
    return (
      <div>
        <NavBarAccueil/>
        <Progress/>
        <NavBarNavigate/>
      </div>
    )
  }
}

export default Container;