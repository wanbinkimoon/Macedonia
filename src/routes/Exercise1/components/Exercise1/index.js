import React, { Component } from 'react';
import PropTypes from 'prop-types'



export default class Exercise1 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      data : null,
    }
  }

  componentWillMount() {
    const newDate = new Date()
    this.setState({
      data : newDate 
    })
  }
  
  render () {
    const { data } = this.state;
    console.log(data);
    return (
      <h1>{data.toString()}</h1>  
    );
  }
}
