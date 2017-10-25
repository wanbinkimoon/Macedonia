import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainButton, Brick, Instructions } from './styles'

let first = true;


export default class Exercise1 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      textContent : 'Clicca e fai cambiare colore dello sfondo',
      secondClick : false
    }
    this.handleClick = this.handleClick.bind(this);   
  }

  handleClick() {
    if(first){
    document.body.style.background = "lightblue";
    this.setState ({textContent : 'Clicca per creare un mattoncino'});
    first = false;
  } else {
    this.setState ({secondClick : true});
  }
}
  
  render () {
    
    return (
    <div>    
    {!this.state.secondClick ? (<MainButton onClick={this.handleClick}>{this.state.textContent}</MainButton>) : 
    (<Brick>M</Brick>)} 
      </div>
    );
  }
}


/* 
Linea 30: perchè devo aggiungere per forza un div sennò non mi stampa una sega? 
Linea 32: se provo oltre al brick a metterci un altro elemento mi da errore e mi dice che posso
          mettercene solo uno. Se volessi oltre al brick metterci un paragrafo, come faccio? 
*/