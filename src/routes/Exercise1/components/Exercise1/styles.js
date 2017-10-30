import styled from 'styled-components'

export const Wrap = styled.div`
`
export const SecondWrap = styled.div`
`

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
border-radius: 15px;

&:hover {
    transform: rotateX(150deg);
    transform: rotateY(130deg); 
    transform: rotateZ(150deg);
}`

export const Yellow = styled.button`
background-color: yellow;
width : 50px;
height : 50px;
border : yellow;
text-align: center;
font-size: 30px;
border-radius: 15px;
transition: width 2s;

&:hover {
    width: 300px;
}`

export const Move = styled.button`
background-color: yellow;
width : 50px;
height : 50px;
border : yellow;
border-radius: 15px;
position: relative;
animation-name: drunkBrick;
animation-duration: 8s;
animation-iteration-count: 3;

@keyframes drunkBrick {
    0%   {left:0px; top:10px;}
    25%  {left:200px; top:5px;}
    50%  {background-color:blue; left:200px; top:60px;}
    75%  {background-color:green; left:40px; top:200px;}
    100% {background-color:red; left:0px; top:10px;}
}
`