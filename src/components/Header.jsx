import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
 
 
  return (
    <div>
   <Navbar  >
        <Container>
          <Navbar.Brand href="/" className='d-flex justify-content-between w-100' >
        
             <h6 style={{fontSize:'40px',color:'white', fontFamily: 'Ephesis'}} className='fw-bold'>Delicious</h6> 
             <div className='d-flex'>
          <p style={{color:'white',fontSize:"16px",marginLeft:"35px",fontFamily:'Poppins'}}>Log in</p>
          <p style={{color:'white',fontSize:"16px",marginLeft:"35px",fontFamily:'Poppins'}}>Sign up</p>
          </div>


          </Navbar.Brand>
        
          
       

        </Container>
      </Navbar>

    </div>
  )
}

export default Header