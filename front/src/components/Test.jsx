import React, { Component } from 'react';

class Test extends Component {
  state = { 
    data: [],
    test: {
      name: 'test',
      description: 'test',
      'category_id': 1,
      balance: 10,
      goal: 156,
      distance: 56,
      image: 'halkjf',
    }
   }

  componentDidMount(){
    const config ={
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state.test)
    }
    fetch("http://localhost:8080/api/project/create.php", config)
        .then(response => response.text())
        .then(data => {
        this.setState({
            data: data,      
        })
    });
  }
  
  render() { 
    return ( 
      <div>
        {console.log(this.state.data)}
      </div>
     );
  }
}
 
export default Test;