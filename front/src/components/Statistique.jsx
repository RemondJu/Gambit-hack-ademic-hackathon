import React, { Component } from 'react';
import '../css/statistique.css';
import NavBarAccueil from './NavBarAccueil';
import NavBarNavigate from './NavBarNavigate';

class Statistique extends Component {
  constructor(props){
    super(props)
    this.state = {
      widthStatsEcology: '100px',
      widthStatsCulture: '50px',
      widthStatsHealth: '30px',
      widthStatsSport: '20px',
      widthStatsEducation: '70px',
      widthStatsGastronomy: '35px',

      widthStatsNumberEcology: '100',
      widthStatsNumberCulture: '50',
      widthStatsNumberHealth: '30',
      widthStatsNumberSport: '20',
      widthStatsNumberEducation: '70',
      widthStatsNumberGastronomy: '35',

    }
  }
  render() {
    return (
      <div>
        <NavBarAccueil/>
        <NavBarNavigate/>
      <div className="containerStats">
       <h2 style={{marginLeft:"50px"}}>Statistique</h2>
       <div className="rowEcology">
       <img src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-ecology.png" alt=""/>
       <div style={{height: "15px", width: this.state.widthStatsEcology, backgroundColor:"blue", borderRadius:"10px"}}></div>
       <p style={{marginLeft: "50px", fontWeight:"bold"}}>{this.state.widthStatsNumberEcology}%</p>
       </div>

       <div className="rowCulture">
       <img src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-ticket.png" alt=""/>
       <div style={{height: "15px", width: this.state.widthStatsCulture, backgroundColor:"blue", borderRadius:"10px"}}></div>
       <p style={{marginLeft: "50px", fontWeight:"bold"}}>{this.state.widthStatsNumberCulture}%</p>
       </div>

       <div className="rowHealth">
       <img src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-heart.png" alt=""/>
       <div style={{height: "15px", width: this.state.widthStatsHealth, backgroundColor:"blue", borderRadius:"10px"}}></div>
       <div className="progressStats"></div>
       <p style={{marginLeft: "50px",fontWeight:"bold"}}>{this.state.widthStatsNumberHealth}%</p>
       </div>

       <div className="rowSport">
       <img src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-basketball.png" alt=""/>
       <div style={{height: "15px", width: this.state.widthStatsSport, backgroundColor:"blue", borderRadius:"10px"}}></div>
       <p style={{marginLeft: "50px",fontWeight:"bold"}}>{this.state.widthStatsNumberSport}%</p>
       </div>

       <div className="rowEducation">
       <img   src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-mortarboard.png" alt=""/>
       <div style={{height: "15px", width: this.state.widthStatsEducation, backgroundColor:"blue", borderRadius:"10px"}}></div>
       <p style={{marginLeft: "50px",fontWeight:"bold"}}>{this.state.widthStatsNumberEducation}%</p>
       </div>

       <div className="rowGastronomy">
       <img  src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-curry.png" alt=""/>
       <div style={{height: "15px", width: this.state.widthStatsGastronomy, backgroundColor:"blue", borderRadius:"10px"}}></div>
       <p style={{marginLeft: "50px",fontWeight:"bold"}}>{this.state.widthStatsNumberGastronomy}%</p>
       </div>

      </div>
      </div>
    )
  }
}

export default  Statistique;