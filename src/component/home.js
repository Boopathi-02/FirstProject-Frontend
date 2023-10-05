import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import Lottie from "lottie-react"
import bird from "../json/bird.json"
import img1 from "../imges/1.jpg"
import img2 from "../imges/imgtwo.jpg"
import img3 from "../imges/imgthree.jpg"
import img4 from "../imges/imgfour.jpg"
import img5 from "../imges/imgfive.jpeg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from 'react-bootstrap/Carousel';

//====================================================
const Home = () => {
  const [num, setNum] = useState(0);

  function boop() {

    console.log(num)
    var rev = document.getElementById("rev");
    var revh = document.getElementById("revh");
    if (num == 1) {
      rev.innerText = "I had no idea anout all the things I had to do to get married / things I needed to think about.Rachel explainer !"
      revh.innerText = "FREDIA & PABLO"
    }
    else if (num == 2) {
      rev.innerText = "Rachel explainer everything to me and guided me through the whole process with enthusiasm and patience .She was wonderful to work with!"
      revh.innerText = "TAMMY & MATTHEW"
    }
    else if (num == 3) {
      rev.innerText = "I had no idea anout all the things I had to do to get married / things I needed to think about.She was wonderful to work with!"
      revh.innerText = "BOOPATHY "
      setNum(0)
    }
  }
  // ============================================================
  useEffect(() => {
    AOS.init({ duration: 1500 });
  })


  // ==================================================================

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
            <Sidebar />
          </div>
          <div className='col-lg-10 homeimg'>
            <div className='words' >
              <h1>let's have a party!</h1>
              <p className='wor' >We plan the best events! </p>
              <p className='wor' >Enjoy your celebration!</p>
            </div>
          </div>
        </div>


        {/* ============================================================= */}


        <div className='row'>
          <div className='col-lg-2'>
            {/* <Sidebar/> */}
          </div>
          <div className='col-lg-10 home2'>
            <div className='hometwo' data-aos='fade-right' >
              <FontAwesomeIcon icon={faQuoteLeft} className='font' />
              <p>Life is made of special moments. Turn each into magic with TWE</p>
              <FontAwesomeIcon icon={faQuoteRight} className='font' />
            </div>
            <Lottie animationData={bird} loop={true} className='bird' />
          </div>
        </div>


        {/* ======================================================================= */}


        <div className='row'>
          <div className='col-lg-2'>
            {/* <Sidebar/> */}
          </div>
          <div className='col-lg-10 home3'>
            <h3>Wedding.Events</h3>
            <h1>About</h1>
          </div>
        </div>



        {/* ================================================================================= */}
        <div className='row'>
          <div className='col-lg-2'>
            {/* <Sidebar/> */}
          </div>
          <div className='col-lg-10 about1'>
            {/* <h3 data-aos="fade-up" >Providing events</h3> */}
            <img src={img1} alt="" className='imgone' data-aos="zoom-in" />
            <img src={img2} alt="" className='imgtwo' data-aos="zoom-in-left" />
            <img src={img3} alt="" className='imgthree' data-aos="zoom-in-rigth" />
            <img src={img4} alt="" className='imgfour' data-aos='fade-doen' />
            <img src={img5} alt="" className='imgfive' data-aos='fade-up' />
          </div>
        </div>


      

        {/* ===================================================================================== */}


        <div className='row ro'>
          <div className='col-lg-2'>
            {/* <Sidebar/> */}
          </div>
          <div className='col-lg-5 rev'  >
            <h3 data-aos='fade-right'>From our client</h3>
            {/* <h4 data-aos='fade-right'>Wedding.Events</h4> */}
            <p data-aos='fade-right'>We are always eager to hear your opinion and share your experience. Here you can find some of our affectionate customers opinions.</p>
            {/* <button onClick={()=>{setNum(num+1);boop()}}> <FontAwesomeIcon icon={faArrowLeft} className='arrow' /></button>
              <button onClick={()=>{setNum(num+1);boop()}}> <FontAwesomeIcon icon={faArrowRight} className='arrow' /></button> */}



          </div>
          <div className='col-lg-5 revw '>
            <div className='rev1' data-aos='fade-left'>
              <p id='rev'>I had no idea anout all the things I had to do to get married / things I needed to think about.Rachel explainer everything to me and guided me through the whole process with enthusiasm and patience .She was wonderful to work with!
              </p>
              <h3 id='revh'>you!</h3>

            </div>
            <div className='d-flex btn ' data-aos='fade-left'>
              <button onClick={() => { setNum(num + 1); boop() }}> <FontAwesomeIcon icon={faArrowLeft} className='arrow' /></button>
              <button onClick={() => { setNum(num + 1); boop() }}> <FontAwesomeIcon icon={faArrowRight} className='arrow' /></button>
            </div>

          </div>

        </div>


      </div>
    </>
  )
}

export default Home
