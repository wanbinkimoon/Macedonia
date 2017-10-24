import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import { test, Prova } from './HomeViewStyles'

export default function HomeView (props) {
  test();
  return (
  <Prova>
    <h4>Welcome!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </Prova>
)
}


