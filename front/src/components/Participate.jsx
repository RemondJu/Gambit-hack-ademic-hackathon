import React, { Component } from 'react';
import UserAccount from './UserAccount';
import '../css/Participate.css'


class Participate extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      participationAmount: 0,
      showCardTransaction: true,
     }

     this.handleParticipationamount = this.handleParticipationamount.bind(this)
  }

  handleParticipationamount(e){
    this.setState({
      participationAmount: e.target.value,
    })
  }

  handleClickTransactionValidate = () => {
    this.setState({ 
      showCardTransaction: true,
    })
  }

  handleClickTransactionInfoExit = () => {
    this.setState({ 
      showCardTransaction: false,
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
          <div class="slider-wrapper">
            <span>Giving financial support</span><br/>
            <input type='range' value={this.state.participationAmount} min='0' max='1000' step='10' onChange={this.handleParticipationamount}/>
            <span>{this.state.participationAmount}</span>
          </div>
        </div>
      {this.state.showCardTransaction ? 
        <div className="transactionInformation">
        <button onClick={() => this.handleClickTransactionInfoExit()}><img src="http://image.noelshack.com/fichiers/2018/47/6/1543062389-error-1.png" alt=""/></button>
      </div> : null }
    </div>
     );
  }
}
 
export default Participate;
