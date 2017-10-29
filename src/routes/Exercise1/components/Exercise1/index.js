import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainButton, Brick, Yellow, Move } from './styles'

let count = 0;


export default class Exercise1 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      textContent : 'Clicca e fai cambiare colore dello sfondo',
      secondClick : false,
      thirdClick : false,
      fourthClick : false
    }
    this.handleClick = this.handleClick.bind(this);   
  }

  handleClick() {
    switch(count){
      case 0 : {
        document.body.style.background = "lightblue";
        this.setState ({textContent : 'Clicca per creare un mattoncino'});
        count ++;
        } 
        break;
      case 1: {
        this.setState ({secondClick : true});
        count ++;
        }
        break;
      case 2 : {
        this.setState ({thirdClick : true});
        count ++;
      }
      break;
      case 3 : {
        this.setState ({thirdClick : false});
        this.setState ({fourthClick : true});
      }
    }
  }
  
  render () {
    
    return (
    <div>    
    {!this.state.secondClick ? (<MainButton onClick={this.handleClick}>{this.state.textContent}</MainButton>) : 
    (<div><p>Passa col mouse sul mattoncino per farlo ruotare, cliccaci sopra per crearne un altro</p><Brick onClick={this.handleClick}>M</Brick></div>)} 
    {(this.state.secondClick && this.state.thirdClick) ? (<div><p>Questo invece si espande, clicca anche su questo</p><Yellow onClick={this.handleClick}></Yellow></div>) : (<div></div>)}
    {(!this.state.thirdClick && this.state.fourthClick) ? (<div><p>Questo invece si muove</p><Move></Move></div>) : (<div></div>)}
      </div>
    );
  }
}


