import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBarNavigate.css';

 class NavBarNavigate extends React.Component {
  
  
  render() {
    return (
      <div className="FooterNavigate">
      <Link className='buttonHome' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/6/1543047821-home.png" alt=""/></Link>
      <Link className='buttonCard' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/6/1543048810-card.png" alt=""/></Link>
      <Link className='buttonContact' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/6/1543048918-telephone-handle-silhouette.png" alt=""/></Link>
      <Link className='buttonGestion' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/6/1543048934-settings-work-tool.png" alt=""/></Link>
      </div>
    );
  }
}
export default NavBarNavigate;