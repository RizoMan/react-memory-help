import React, { Component } from 'react';

class ComponentWillMount extends Component {
  constructor(props){
      console.log('constructor')
    super(props); // este mensaje llama al metodo constructor de Component
    //Inicializamos el state de nuestro componente
    this.state = {
      mensajeInicial: "mensaje inicial"
    }
    debugger;
  }

  componentWillMount = () => {
      console.log('componentWillMount');
      this.setState({
          mensajeInicial: "mensaje modificado"
      })
      debugger;
  }

  componentDidMount = () => {
      console.log('componentDidMount')
      debugger;
  }

  render(){
      console.log('render')
      debugger;
    return(
      <div className="App">
        <h4>Ciclo de Montaje: ComponentWillMount</h4>
        <p>{this.state.mensajeInicial}</p>
      </div>
    );
  }
}

export default ComponentWillMount;
