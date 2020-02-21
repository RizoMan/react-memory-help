import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGE = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    dolphin: 'https://ichef.bbci.co.uk/images/ic/720x405/p068dz20.jpg',
}

const ANIMALS = Object.keys(ANIMAL_IMAGE);

class AnimalImages extends Component{
    state = {src: ANIMAL_IMAGE[this.props.animal]}

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.clear();
        console.log('componentWillRecieveProps');
        console.log(nextProps);
        this.setState({
            src: ANIMAL_IMAGE[nextProps.animal]
        });
    }

    // shouldComponentUpdate = (nextProps) => {
    //     console.log('2');
    //     return this.props.animal !== nextProps.animal;
    // }

    // componentWillUpdate = (nextProps, nextState) => {
    //     console.log('componentWillUpdate', nextProps, nextState);
    //     const img = document.querySelector('img');
    //     console.log(img.alt);

    //     img.animate([
    //         {
    //             filter: 'blur(0px)'
    //         },
    //         {
    //             filter: 'blur(2px)'
    //         }], {
    //             duration: 500,
    //             easing: 'ease'
    //         }
    //     );
    // }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate');
        const img = document.querySelector('img');
        img.animate([
                {
                    filter: 'blur(2px)'
                },
                {
                    filter: 'blur(0px)'
                }
            ], {
                duration: 1500,
                easing: 'ease'
            }
        );
    }

    render(){
        console.log('-> render'); 
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img alt={this.props.animal} src={this.state.src} width='250'></img>
            </div>
        )
    }
}

AnimalImages.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

class UpdateCycleExample extends Component {
    state = {animal: 'panda'}

    _renderAnimalButton = (animal) => {
        return (
            <button
            //disabled={animal === this.state.animal}
            key={animal} 
            onClick={() => this.setState({animal})}>
                {animal}
            </button>
        )
    }

    render(){
        return(
            <div>
                <h4>Ciclo de Actualización, ejemplo de: ComponentWillRecieveProps.</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImages animal={this.state.animal}/>
            </div>
        )
    }
} 

export default UpdateCycleExample;