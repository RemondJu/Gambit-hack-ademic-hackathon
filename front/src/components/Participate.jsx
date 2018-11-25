import React, { Component } from 'react';
import UserAccount from './UserAccount';
import '../css/Participate.css'
import NavBarNavigate from './NavBarNavigate';



class Participate extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      participationAmount: 0,
      showCardTransaction: false,
      showCardTransactionValidate: false,
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
      showCardTransactionValidate: false,
    })
  }

  handleClickTransactionInfoExit = () => {
    this.setState({ 
      showCardTransaction: false,
    })
  }

  handleClickValidate = () => {
    this.setState({ 
      showCardTransactionValidate: true,
    })
  }

  handleClickCancel = () => {
    this.setState({ 
      showCardTransactionValidate: false,
    })
  }




  render() {
    return (
      <div className='Participate'>
        <NavBarNavigate/>
        <h2>Support the project :</h2>
        <h3>{this.props.name}</h3>
        <UserAccount />
        <div className='Participation'>
        <h3>I want to participate by :</h3>
        <span>Giving financial support</span><br/>
        <div class="slider-wrapper">
        <input type='range' value={this.state.participationAmount} min='0' max='1000' step='10' onChange={this.handleParticipationamount}/>
        </div>
        <button onClick={() => this.handleClickValidate()}>validate the transaction</button>
        {this.state.showCardTransactionValidate ? 
        <div className="transactionInformation">
          <div className="row">
            <button onClick={() => this.handleClickCancel()}><img src="http://image.noelshack.com/fichiers/2018/47/6/1543062389-error-1.png" alt=""/></button>
          </div>
          <div className="row"><p>You will finance the project: {this.props.name} of {this.state.participationAmount}€. Are you sure?</p></div>
          <div><button onClick={() => this.handleClickTransactionValidate()}>Validate</button><button onClick={() => this.handleClickCancel()}>Cancel</button></div>
        </div> : null }

        {this.state.showCardTransaction ? 
          <div className="transactionInformation">
          <div className="row">
          <a href="/"><img src="http://image.noelshack.com/fichiers/2018/47/6/1543062389-error-1.png" alt=""/></a>
          </div>
          <div className="row"><p>Your payment of {this.state.participationAmount}€ <br/>for {this.props.name} was well taken into account.</p></div>
          <div className="row"><p>Thank you for your support !</p></div>
        </div> : null }
      </div>
      </div>
     );
  }
}
 
export default Participate;
