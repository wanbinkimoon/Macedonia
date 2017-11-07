import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { languages } from './text'
import { LanguageButton, Wrap } from './styles'



export default class Exercise2 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      textContent1 : '________',
      textContent2 : '________'
    }
    this.click = this.click.bind(this);
  }

  click(lan) {
    for (var key in languages){    
        if (lan.target.id === languages[key].id)
          this.setState({
          textContent1 : languages[key].lang, // I want to put here the selected language
          textContent2 : languages[key].txt // and here the translation 
    })
  }
}
  
  render () {

  const { textContent1, textContent2 } = this.state

  return (
    <Wrap>
    <LanguageButton id='eng' onClick={this.click}>{languages.inglese.lang}</LanguageButton>
    <LanguageButton id='fra' onClick={this.click}>{languages.francese.lang}</LanguageButton>
    <LanguageButton id='esp' onClick={this.click}>{languages.spagnolo.lang}</LanguageButton>
    <LanguageButton id='deu' onClick={this.click}>{languages.tedesco.lang}</LanguageButton>
    <p>Camaleonte in {textContent1} è {textContent2}</p>
    </Wrap>
    );
  }
}


