//className="mainButton" 
//onClick={document.body.style.background != "lightblue" ? this.handleClick : this.secondClick }

import styled from 'styled-components'

export const MainButton = styled.button`
background-color: #4CAF50; 
border: none;
color: white;
padding: 16px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
-webkit-transition-duration: 0.4s;
transition-duration: 0.4s;
cursor: pointer;
background-color: white; 
color: black; 
border: 2px solid #4CAF50;

&:hover {
    background-color: #4CAF50;
    color: white; 
}`

export const Brick = styled.button`
background-color: red;
width : 50px;
height : 50px;
border : red;
text-align: center;
font-size: 30px;
border-radius: 15px;`

