import React ,{ useState  } from 'react'
import styled from 'styled-components'


function Header() {
  const [burgerStatus,setBurgerStatus]=useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Menu" />
      </a>
      <Menu>
      <a href='#'>Model 3</a>
      <a href='#'>Model X</a>
      <a href='#'>Model Y</a>
      <a href='#'>Model S</a>
      </Menu>
      <RightMenu>
      <a href='#'>Shop</a>
      <a href='#'>Tesla Account</a>
      </RightMenu>
      <CustomMenu src='/images/menu_logo.png' onClick={()=>setBurgerStatus(true)} />

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
        <CustomClose src='/images/close.png' alt="close" onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        
      <li><a href='#'>Exixtisng Inventory</a></li>
      <li><a href='#'>Used Inventory</a></li>
      <li><a href='#'>Trade-in</a></li>
      <li><a href='#'>CyberTruck</a></li>
      <li><a href='#'>Roadster</a></li>
      <li><a href='#'>Semi</a></li>
      <li><a href='#'>Charging</a></li>
      <li><a href='#'>Testdrive</a></li>
      </BurgerNav>
      </Container>
  )
}

export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20 px;
top:0;
left:0;
right:0;
justify-content:space-between;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;

a{
font-weight:600;
text-transform:uppercase;
padding:0 10px;
flex-wrap:nowrap;

}
@media(max-width:768px)
{
  display:none;
}

`
const RightMenu=styled.div`
display:flex;
align-item:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
  
  }

`
const CustomMenu=styled.img`



`
const CustomClose=styled.img`

cursor:pointer;

`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`
const BurgerNav=styled.div`

z-index:16;
position:fixed;
background:white;
top:0;
right:0;
bottom:0;
width:300px;
list-style:none;
display:flex;
flex-direction:column;
text-align:start;


li{
  padding:15px 0;
  border-bottom:1px solid rgba (0,0, .2);
  a{
    font-weight:600;
  }
  
}


transform:${props=>props.show?'translateX(0)':'translateX(100%)'}; 
`