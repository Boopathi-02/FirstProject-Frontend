import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./sidebar.css"
import image from "../imges/logo nuzze.jpg"
import Lottie from "lottie-react"
import heart from "../json/animation_ll4qk5fm.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




const Sidebar = () => {
  // const [toggle, setToggle] = useState(false);



  
  // =======================================================================
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2 nav '>
          <img src={image} alt="" className='navimg' />
          <h3>Wedding.Events</h3>
          {/* <Lottie animationData={heart}  className='hear'/> */}
          <div className='opt'>
           <a href="/"> <h6>Home</h6></a>
            <a href="/"><h6>About</h6></a>
            <a href="/services"><h6>Services</h6></a>
            <a href="/contact"><h6>Contact us</h6></a>
          <a href="/cart"><h6 ><FontAwesomeIcon icon={faCartShopping} />Cart</h6></a> 

          </div>
          <Lottie animationData={heart}  className='heart' style={{color:"white"}}/>
          {/* {
            toggle ===false?
            ( <a href="/login"><h6 className='phn' >login</h6></a>)
            :(<a href="/login"><h6 className='phn' >LOgout</h6></a>)
          }
            */}
            <a href="/login"><h6 className='phn' >login</h6></a>



          
          <div className='con'>
          </div>
        </div>
        

      </div>

    </div>
    
    
    </>
  )
}

export default Sidebar
