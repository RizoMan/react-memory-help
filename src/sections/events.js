/***
 * Use in main App class
 * 
 * import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0
    }
  }

  handleClick = (e) => {
    alert("chupala");
    console.log(e.target);
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({
      mouseX: clientX,
      mouseY: clientY
    });
    console.log(clientX, clientY);
  }

  render(){
    return(
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
        <div style={{border: '1px solid black', marginTop: 10, padding: 10}} onMouseMove={this.handleMouseMove}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    );
  }
}

export default App;

 */