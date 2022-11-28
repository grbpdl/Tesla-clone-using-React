import React from 'react'
import styled from 'styled-components'

function Section({title,discription,upbuttontext,downbuttontext,backgroundimg}) {
  return (
    <Wrap bgimage={backgroundimg}>
      <ItemText>

    <h1>{title}</h1>
    <p>{discription}</p>
      </ItemText>
    <Buttons>
        <ButtonGroup>

          <UpButton>
          {upbuttontext}
          </UpButton>
          {downbuttontext &&
          <DownButton>
          {downbuttontext}
          </DownButton>
          }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-image:center;
background-repeat:no-repeat;

display:flex;
flex-direction:column;
justify-content:space-between;//vertical
align-items:center;//horizontal
background-image:${props=>`url("/images/${props.bgimage}")`};
`

const ItemText=styled.div`
padding-top:15vh;
text-align:center;

`
const ButtonGroup =styled.div`
display:flex;
margin-bottom:30px;         
@media (max-width:768px){
  flex-direction:column;
}
`
const UpButton =styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
text-transform:uppercase;
cursor:pointer;
margin:8px;

`
const DownButton =styled(UpButton)` //takes style same as UPbutton
background:white;
opacity:0.65;
color:black; 
`
const DownArrow=styled.img` 

height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`
  const Buttons=styled.div`
`
