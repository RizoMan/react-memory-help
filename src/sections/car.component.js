import React, { Component } from 'react';
import cars from '../data/cars.json';

export default class CarItem extends Component {
    render(){
        const { car } = this.props;
        return(
            <li>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>
            </li>
        )
    }
}

/**
 * Use in app class
 * 
 * class App extends Component {

  render(){
    return(
      <div className="App">
        <h4>Trabajando con listas con objetos</h4>
        <ul>
          {
            cars.map(car => {
              return <Car key={car.id} car={car}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
 */