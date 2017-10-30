import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MainButton, Brick, Yellow, Move, Wrap, SecondWrap } from './styles'



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
    const { count } = this.state
    if (count <= 4){
      this.setState({
        textContent : 'Clicca per creare un mattoncino',
        count : ++this.state.count 
      })
      console.log(count)
    }
  }
  
  render () {
    const { count, textContent } = this.state
    const secondClick = count > 1
    const thirdClick =  count > 2
    if (count > 0) {document.body.style.background = 'tomato'}

  return (
    <Wrap secondClick>    
    {!secondClick && <MainButton onClick={this.handleClick}>{textContent}</MainButton>}
    {secondClick && 
      <div>
        <p>Passa col mouse sul mattoncino per farlo ruotare, cliccaci sopra per crearne un altro</p>
        <Brick onClick={this.handleClick}>M</Brick>
      </div>}
      {thirdClick && <SecondBlock count={count} click={() => this.handleClick()}/>}

    
      </Wrap>
    );
  }
}


const SecondBlock = (prop) => {
  const { count, click } = prop
  const thirdClick =  count < 4
  const fourthClick = count > 3
  const text = {
    text1 : 'Questo invece si espande, clicca anche su questo',
    text2 : 'Questo invece si muove'
  }

  return (
    <SecondWrap>
    <p>{thirdClick ? text.text1 : text.text2}</p>
    {(thirdClick) && (<Yellow onClick={click}/>)}
    {(!thirdClick && fourthClick) && (<Move/>)}
    </SecondWrap>
  )
}