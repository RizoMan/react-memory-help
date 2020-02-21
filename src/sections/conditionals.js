import React, {Component} from 'react';

class LoginButton extends Component{
    render(){
        return(
            <button>Login</button>
        )
    }
}   

class LogoutButton extends Component{
    render(){
        return(
            <div>
                <p>Bienvenido, usuario!</p>
                <button onClick={() => {this.setState({ isUserLogged: false }); console.log("click")}}>Logout</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component{
    constructor(){
        super();
        this.state = {
            isUserLogged: true
        }
    }

    render(){
        return(
            <div>
                <h4>Conditional Renderig</h4>
                { this.state.isUserLogged ? <LogoutButton /> : <LoginButton /> }
            </div>
        )
    }
}