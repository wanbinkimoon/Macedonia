import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainButton, Brick, Yellow, Move } from './styles'



export default class Exercise1 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      textContent : 'Clicca e fai cambiare colore dello sfondo',
      count : 0
    }
    this.handleClick = this.handleClick.bind(this);   
  }

  handleClick() {
    this.setState({
      count : ++this.state.count 
    })
    console.log(this.state.count)
  }
  
  render () {
    const { count, textContent } = this.state
    const secondClick = count > 0
    const thirdClick = count > 1
    const fourthClick = count > 2
  return (
    <div>    
    {!secondClick ? (<MainButton onClick={this.handleClick}>{textContent}</MainButton>) : 
    (<div><p>Passa col mouse sul mattoncino per farlo ruotare, cliccaci sopra per crearne un altro</p><Brick onClick={this.handleClick}>M</Brick></div>)} 
    {(secondClick && thirdClick) ? (<div><p>Questo invece si espande, clicca anche su questo</p><Yellow onClick={this.handleClick}></Yellow></div>) : (<div></div>)}
    {(!thirdClick && fourthClick) ? (<div><p>Questo invece si muove</p><Move></Move></div>) : (<div></div>)}
      </div>
    );
  }
}


