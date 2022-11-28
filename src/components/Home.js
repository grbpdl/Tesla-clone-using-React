import React from 'react'
import styled  from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      discription="order online for touchless delivery"
      backgroundimg="model-s.jpg"
      upbuttontext="Costum order"
      downbuttontext="Existing Inventory"
      />
      <Section 
      title="Model Y"
      discription="order online for touchless delivery"
      backgroundimg="model-y.jpg"
      upbuttontext="Costum order"
      downbuttontext="Existing Inventory"
      />
      <Section 
      title="Model 3"
      discription="order online for touchless delivery"
      backgroundimg="model-3.jpg"
      upbuttontext="Costum order"
      downbuttontext="Existing Inventory"
      />
      <Section 
      title="Model X"
      discription="order online for touchless delivery"
      backgroundimg="model-x.jpg"
      upbuttontext="Costum order"
      downbuttontext="Existing Inventory"
      />
      <Section 
      title="Lowest cost solar panel in America"
      discription="Money-Back Gaurantee"
      backgroundimg="solar-panel.jpg"
      upbuttontext="Order now"
      downbuttontext="Learn More"
      />
      <Section 
      title="Solar for new roofs"
      discription="Solar roof cost less than a new roof"
      backgroundimg="solar-roof.jpg"
      upbuttontext="Order now"
      downbuttontext="Learn More"
      />
      <Section 
      title="Accessories"
      discription=""
      backgroundimg="accessories.jpg"
      upbuttontext="Shop now"
      
      />
    </Container>
  )
}

export default Home
const Container=styled.div`
height:100vh;

`
