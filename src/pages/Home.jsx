import React from 'react'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState } from 'react';
import { fetchRestaurant, search } from '../redux/restaurantSlice';
import Header from '../components/Header';
import InputGroup from 'react-bootstrap/InputGroup'; 
import Form from 'react-bootstrap/Form';


function Home() {
 
  const allRestaurant = useSelector((state) => state.restaurantSlice.allRestaurant)
  const dispatch = useDispatch()
  console.log(allRestaurant);


  useEffect(() => {
    dispatch(fetchRestaurant())
  }, [])
  return (
    <div>
      
<div  style={{background:'url(https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=1060&t=st=1701350753~exp=1701351353~hmac=b974a1ad26ceac6bffef088f1a1b5402c661d582f374152d3b3861fb8fa67fe3)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
<Header/>
<div className="d-flex justify-content-center align-items-center flex-column" style={{minHeight:'500px'}}>
<h1 className='text-light ' style={{textAlign:'center',fontFamily:'Poppins',fontWeight:'bold'}}>Find the best restaurants,<br></br> cafes and bars</h1> 




             <Form  inline style={{  width: '400px' }}>
            <InputGroup>

              <Form.Control
                placeholder="Search by neighborhood"
                type="search"
                onChange={(e)=>dispatch(search(e.target.value))}
                style={{ borderRadius: "30px 1px 1px 35px", backgroundColor: 'white' }}
                aria-label="Search"
               
              /><InputGroup.Text id="basic-addon1" style={{ borderRadius: "1px 35px 30px 0px", backgroundColor: '#db6930' }}><i class="fa-solid fa-magnifying-glass text-light"></i></InputGroup.Text>
            </InputGroup>

          </Form>
           
</div>
</div>
<br></br>

     <div className="row py-2 px-5">
     <h3 className='' style={{color:'black',fontFamily:'Poppins',fontWeight:'bold'}}>Best Food in New York City</h3>

     { allRestaurant?.length>0 ?
  allRestaurant?.map((items)=>(
    <div className="col-lg-3">
<RestCard restaurant={items}/>
    </div>
   )):<p>No Restaurant Avaliable</p>
}

     </div>

     
      </div>
   
  )
}

export default Home