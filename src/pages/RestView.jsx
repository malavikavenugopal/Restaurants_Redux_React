import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

import Modal from 'react-bootstrap/Modal';
import RestViewCollapse from '../components/RestViewCollapse';
import { useState } from 'react';
import {useParams}from'react-router-dom'
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function RestView() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {id}= useParams()
  console.log(id);
  const{ allRestaurant,loading,error}= useSelector((state)=>state.restaurantSlice)
  console.log(allRestaurant);
 const restaurant =  allRestaurant.find((items)=>items.id==id)
 console.log(restaurant);
  return (
    <div>

<Navbar >
        <Container>
          <Navbar.Brand href="/" className='d-flex justify-content-between w-100' >
        
             <h6 style={{fontSize:'40px', fontFamily: 'Ephesis'}} className='fw-bold'>Delicious</h6> 
             <div className='d-flex'>
          <p style={{fontSize:"16px",marginLeft:"35px",fontFamily:'Poppins'}}>Log in</p>
          <p style={{fontSize:"16px",marginLeft:"35px",fontFamily:'Poppins'}}>Sign up</p>
          </div>


          </Navbar.Brand>
        
          
       

        </Container>
      </Navbar>
  
      <Container>
        <div className="row py-5" style={{ marginTop: '30px' }}>
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <img src={restaurant?.photograph} className='w-100' />
          </div>
          <div className="col-lg-6">
            <div className='d-flex'>
              <hr></hr>
              <h5 className='text-center' style={{ padding: '5px' }}>
                <span style={{ color: '#db6930' }}>  RESTAURANT</span> DETAILS
              </h5>
              <button style={{ backgroundColor: "#db6930"}} className='btn btn-dark ms-auto ' onClick={handleShow}>Operating Hours</button>
              <hr></hr>
            </div>
            <div className='d-flex justify-content-center py-3 px-3'>
              <ListGroup style={{ width: '600px' }}>
                <ListGroup.Item className='d-flex justify-content-center' style={{ fontSize: "22px" }}> {restaurant?.name}</ListGroup.Item>
                <ListGroup.Item>Neighborhood: {restaurant?. neighborhood}</ListGroup.Item>
                <ListGroup.Item>Cuisine _type: {restaurant?.cuisine_type}</ListGroup.Item>
                <ListGroup.Item>Address: {restaurant?.address} </ListGroup.Item>
              <div>
<Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title>Operating Hours</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <ListGroup>
      <ListGroup.Item>Monday: {restaurant?.operating_hours?.Monday} </ListGroup.Item>
      <ListGroup.Item>Tuesday: {restaurant?.operating_hours?.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday: {restaurant?.operating_hours?.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {restaurant?.operating_hours?.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {restaurant?.operating_hours?.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {restaurant?.operating_hours?.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {restaurant?.operating_hours?.Sunday}</ListGroup.Item>
    </ListGroup>
  </Modal.Body>

</Modal>
<br></br>
<RestViewCollapse  restaurantdetails={restaurant} /> 

              </div>
              </ListGroup>
            </div>




          </div>

        </div>
      </Container>


    </div>
  )
}

export default RestView