import React from 'react';
import '../css/navBar.css';

 class NavBarAccueil extends React.Component {
  
  render() {
    return (
      <div className="headerHome">
      <h1>Home</h1>
      <button className="buttonDisconnect" type="button">Disconnect</button>
      </div>
    );
  }
}
export default NavBarAccueil;