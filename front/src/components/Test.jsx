import React, { Component } from 'react';

class Test extends Component {
  state = { 
    data: [],
   }

  componentDidMount(){
    fetch("http://localhost:8080/api/project/select_one.php?id=9")
        .then(response => response.json())
        .then(data => {
        this.setState({
            data: data,          
        });
    });
  }
  
  render() { 
    return ( 
      <div>

      </div>
     );
  }
}
 
export default Test;