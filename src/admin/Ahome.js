import React, { useEffect, useRef, useState } from 'react';
import './User_info.css'
import Sidebar from './Asidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Asidebar from './Asidebar';
import 'bootstrap-icons/font/bootstrap-icons.css'




function Ahome({ Toggle }) {
  const [userData, setUserData] = useState([]);

  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      if (rect.top < screenHeight && rect.bottom >= 0) {
        container.classList.add('animation');
      }
    }
  };
  useEffect(() => {

    fetch('http://localhost:3005/getuserdata')
      .then(response => response.json())
      .then(data => {

        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const [projetcData, setprojectData] = useState([]);
  useEffect(() => {

    fetch('')
      .then(response => response.json())
      .then(data => {

        setprojectData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

 


  return (



    <div className='container-fluid  '>
      <div className='row '>
        {/* <div className='col-lg-2'>
        
        </div> */}
        <div className='col-lg-12 mt-5'>
          <div className='row'>
            <div className='col-md-4 '>
              <div className='p-3 div1 d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>{userData.length}</h3>
                  <p className='fs-5'>Users</p>
                </div>
                <i className='bi bi-people p-3 fs-1'></i>
              </div>

            </div>
            <div className='col-md-4'>
              <div className='p-3 div1  d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>{projetcData.length}</h3>
                  <p className='fs-5'>On-going Projects</p>
                </div>
                <i className='bi bi-cart-plus p-3 fs-1'></i>
              </div>

            </div>
            <div className='col-md-4'>
              <div className='p-3 div1  d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>0</h3>
                  <p className='fs-5'>Completed Projects</p>
                </div>
                <i className='bi bi-truck p-3 fs-1'></i>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Ahome;



