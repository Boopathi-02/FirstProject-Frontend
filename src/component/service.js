import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./service.css"
import Sidebar from './sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
            <Sidebar />
          </div>
          <div className='col-lg-10 headdiv '>
            <div className='col-lg-5 headdiv1 '>
              <FontAwesomeIcon icon={faQuoteLeft} className='font' />
              <p>A happy marriage is a long conversation Which always seems to shorts </p>
              <FontAwesomeIcon icon={faQuoteRight} className='font' />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
          </div>
          <div className='col-lg-10 headdiv2'>
            <h1 >Our service</h1>
            <h2>Wedding.Events</h2>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row maindiv'>
          <div className='col-lg-2'>
          </div>
          <div className='col-lg-3 condiv1'>
            <a href="/decoration"><div className='hoverdiv'>
              <h1>Decorations</h1>
            </div></a>
          </div>
          <div className='col-lg-3 condiv2'>
            <a href="/makeover"><div className='hoverdiv'>
              <h1>Makeover</h1>
            </div></a>

          </div>
          <div className='col-lg-3 condiv3'>
            <a href="/photo"><div className='hoverdiv'>
              <h1>Photography</h1>
            </div></a>

          </div>
        </div>
        <br />
        <br />
        <div className='row maindiv'>
          <div className='col-lg-2'></div>
          <div className='col-lg-3'></div>
          <div className='col-lg-3 condiv4'>
            <a href="/catering"><div className='hoverdiv'>
              <h1>Catering</h1>
            </div></a>
          </div>
          <div className='col-lg-3'></div>

        </div>



      </div>


    </>
  )
}

export default Services;