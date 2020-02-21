import React, { Component } from 'react';

export default class Forms extends Component{
    constructor(){
        super();
        this.state=  {
            inputName:'',
            inputTwitter: '@',
            checked: true
        }
    }
    handleSumbmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    }

    handleChange = (e) => {
        console.log(e.target.checked);
        this.setState({
            checked: e.target.checked
        })

    }
     
    render() {
        return(
            <div>
                <form onSubmit={this.handleSumbmit}>
                    <h4>Formularios</h4>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input id='name' name='userName' placeholder='Introduce tu nombre' 
                        onChange={e => this.setState({inputName: e.target.value})}
                        value={this.state.inputName}/>
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input id='twitter' name='twitter' placeholder='Introduce tu Twitter'
                        onChange={e => this.setState({inputTwitter: e.target.value})}
                        value={this.state.inputTwitter}/>
                    </p>
                    <p>
                        <label> 
                            <input onChange={this.handleChange} checked={this.state.checked}  type="checkbox"/>
                            Accepted terms
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}