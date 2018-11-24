import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

 class NavBarAccueil extends React.Component {
  
  render() {
    return (
      <div className="headerHome">
      <h1>Home</h1>
      <Link className='buttonDisconnect' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/6/1543049927-power.png" alt=""/></Link>
      </div>
    );
  }
}
export default NavBarAccueil;