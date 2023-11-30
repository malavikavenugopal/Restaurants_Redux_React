import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <div style={{margin:'20px'}}>
<Link to= {`/restview/${restaurant.id}`} style={{textDecoration:'none'}}>

 
<Card style={{ width: '17rem' }} className='card'>
      <Card.Img  height={250} variant="top" src={restaurant.photograph} />
      <Card.Body >
        <Card.Title style={{fontSize:'18px',textDecoration:'none',color:'#db6930',fontFamily:'Poppins'}}>{restaurant.name}</Card.Title>
        <Card.Text >
    <div className='d-flex justify-content-between'>
    <p style={{fontFamily:'Poppins',fontSize:"14px"}}> {restaurant.cuisine_type}</p>
          <p style={{fontFamily:'Poppins',fontSize:"14px"}}> {restaurant.neighborhood}</p>
    </div>
  
        </Card.Text>
     
      </Card.Body>
    </Card>
</Link>

    </div>
  )
}

export default RestCard