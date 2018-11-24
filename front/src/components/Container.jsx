import React, { Component } from 'react'
import NavBarAccueil from './NavBarAccueil';
import Progress from './Progress';

class Container extends Component {
  render() {
    return (
      <div>
        <NavBarAccueil/>
        <Progress/>
      </div>
    )
  }
}

export default Container;