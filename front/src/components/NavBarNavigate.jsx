import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBarNavigate.css';

 class NavBarNavigate extends React.Component {
  
  
  render() {
    return (
      <div className="FooterNavigate">
      <Link className='buttonHome' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/7/1543134167-house.png" alt=""/></Link>
      <Link className='buttonGestion' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/7/1543133929-search.png" alt=""/></Link>
      <Link className='buttonStats' to='/Stats'><img src="http://image.noelshack.com/fichiers/2018/47/6/1543062516-graph.png" alt=""/></Link>
      <Link className='buttonGestion' to='/'><img src="http://image.noelshack.com/fichiers/2018/47/7/1543134110-exit.png" alt=""/></Link>
      </div>
    );
  }
}
export default NavBarNavigate;


