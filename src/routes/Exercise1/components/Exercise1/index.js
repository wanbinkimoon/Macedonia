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

  handleClick(action) {
    const { count } = this.state
    console.log(action)
    if (count <= 4){
      this.setState({
        textContent : 'Clicca per creare un mattoncino',
        count : ++this.state.count 
      })
      
      action()
      
      console.log(count)
    }
  }
  
  render () {
    const { favetti, merdaAction } = this.props
    const { count, textContent } = this.state
    const secondClick = count > 1
    const thirdClick =  count > 2
    if (count > 0) {document.body.style.background = 'tomato'}

  return (
    <Wrap secondClick>    
    {!secondClick && <MainButton onClick={this.handleClick(merdaAction)}>{textContent}</MainButton>}
    {secondClick && 
      <div>
        <p>{favetti}</p>
        <Brick onClick={this.handleClick}>M</Brick>
      </div>}
      {thirdClick && <SecondBlock count={count} click={() => this.handleClick(merdaAction)}/>}

    
      </Wrap>
    );
  }
}


import {text} from './text'

const SecondBlock = (props) => {
  const { count, click } = props
  const thirdClick =  count < 4
  const fourthClick = count > 3

  return (
    <SecondWrap>
    <p>{thirdClick ? text.text1 : text.text2}</p>
    {(thirdClick) && (<Yellow onClick={click}/>)}
    {(!thirdClick && fourthClick) && (<Move/>)}
    </SecondWrap>
  )
}