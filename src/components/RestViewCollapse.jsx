import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function RestViewCollapse({restaurantdetails}) {
    const [open, setOpen] = useState(false);

    const restaurant = restaurantdetails
    console.log(restaurant);
  return (
    <div>

<button


        onClick={() => setOpen(!open)}
        className='btn btn-dark ' 
        style={{backgroundColor: "#db6930"}}
        aria-controls="example-collapse-text"
        aria-expanded={open}
       
      >
        Click here to see reviews
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text" >
    {restaurant?.reviews.map(
        (items)=>(

            <>
            <h6>{items.name}</h6>
            <p>{items.date}</p>
            <p>{items.rating}</p>
            <p>{items.comments.slice(0,140)}.....</p>
            
            </>
        )
    )}
        </div>
      </Collapse>

    </div>
  )
}

export default RestViewCollapse