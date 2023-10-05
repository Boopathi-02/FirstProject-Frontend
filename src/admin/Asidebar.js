import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Asidebar.css"
import image from "../imges/logo nuzze.jpg"
import Lottie from "lottie-react"
import heart from "../json/animation_ll4qk5fm.json"
import Dropdown from 'react-bootstrap/Dropdown';






const Asidebar = () => {





  // =======================================================================
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 nav '>
            <img src={image} alt="" className='navimg' />
            {/* <Lottie animationData={heart}  className='hear'/> */}
            <div className='Aopt'>
              <a href="/Auser"> <h6>USER INFO</h6></a>
              <Dropdown className='drop'>
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                 TEAM DETAILS
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/Team_info">TEAM INFO</Dropdown.Item>
                  <Dropdown.Item href="/Teamallocation"> TEAM ALLOCATION</Dropdown.Item>
               
                </Dropdown.Menu>
              </Dropdown>

              <a href="/Project_info"><h6>PROJECT INFO</h6></a>
              <a href="/Product_info"><h6>PRODUCT INFO</h6></a>
              <a href="/Feedback"><h6>FEEDBACK</h6></a>
              <a href="/Apayment"><h6>PAYMENT INFO</h6></a>

            </div>
            <Lottie animationData={heart} className='heart' style={{ color: "white" }} />

            <a href="/login"><h6 className='phn' >logOut</h6></a>




            <div className='con'>
            </div>
          </div>


        </div>

      </div>


    </>
  )
}

export default Asidebar
