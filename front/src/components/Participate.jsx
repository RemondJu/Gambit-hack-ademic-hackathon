import React, { Component } from 'react';
import UserAccount from './UserAccount';
import '../css/Participate.css'


class Participate extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      participationAmount: 0,
     }
     this.handleParticipationamount = this.handleParticipationamount.bind(this)
  }

  handleParticipationamount(e){
    this.setState({
      participationAmount: e.target.value,
    })
  }

  render() {
    return (
      <div className='Participate'>
      <h2>Support the project :</h2>
      <h3>{this.props.name}</h3>
      <UserAccount />
      <div className='Participation'>
        <h3>I want to participate by :</h3>
        <span>Giving financial support</span><br/>
        <div class="slider-wrapper">
        <input type='range' value={this.state.participationAmount} min='0' max='1000' step='10' onChange={this.handleParticipationamount}/>
        </div>
        <span>{this.state.participationAmount}</span>
      </div>
      
    </div>
     );
  }
}
 
export default Participate;
