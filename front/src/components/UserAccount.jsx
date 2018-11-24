import React, { Component } from 'react';

const accounts = [
  {
    type: 'Current account',
    balance: 6000,
  },
  {
    type: 'Saving account',
    balance: 4500,
  }
]

class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      accounts: accounts,
    }
  }
  render() { 
    return ( 
      <div className='UserAccount'>
        <h2>My accounts :</h2>
        {this.state.accounts.map(account=> 
        <div account>
          <span>{account.type}</span><br/>
          <span>Balance: {account.balance}</span>
        </div>)}
      </div>
    );
  }
}
 
export default UserAccount;