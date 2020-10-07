import React from 'react';
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import CardBody from './CardBody'

function StyledCard() {
  return {
    maxWidth: '440px',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '5px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  }
}

export default function Card() {

  return (
    <div style={StyledCard()}>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  )
}