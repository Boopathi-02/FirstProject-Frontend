import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./makeover.css";
import Sidebar from './sidebar';
import axios from 'axios';
const Makeover = () => {


  const url = "http://localhost:3005"
// ======================================================


  const [productget, setProductget] = useState([]);

  
  console.log(productget)

  useEffect(() => {
    axios.get("http://localhost:3005/prodget")
      .then(res => {
        setProductget(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);


  // =============================================================
  // const [productidget2, setIdget] = useState([0]);
  const id = localStorage.getItem('id')


  const sendDataToBackend = (productidget2 , id) => {

    const backendUrl = 'http://localhost:3005/cartUpdate';
    axios.post(backendUrl, { productidget2 , id})
    .then((res)=>{
      if(res.data.status==="no records"){
          alert(" register first")
          window.location.href = '/login';
      }else if(res.data.status =='onprocessing'){
        alert('onprocessing')

      }
     
     
  })

  };


  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
          <Sidebar />

          </div>

          <div className='col-lg-10 mhead '>
            <h1>MakeOver</h1>
            <h4>Wedding.Events</h4>
          </div>
        </div>
       

        {/* ======================================================================================= */}
        <div className='row r1'>
          <div className='col-lg-2'>

          </div>

          <div className='col-lg-10 ten'>
            <div className='row'>
              {productget.map((prod, i) => {
                if (prod.sub_category == "makeover") {
                  return (<div className='col-lg-6 deccol' key={prod.id}>
                    <div className='cont'>
                      <div className='card'>
                        <div className='front'>
                          <img src={`${url}${prod.image}`} alt="" />

                        </div>
                        <div className='back'>
                          <p>{prod.description}</p>
                          <button onClick={() => { sendDataToBackend(prod.id , id); }}>ADD To CART</button>

                        </div>
                      </div>
                    </div>
                  </div>)

                }


              })}


            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Makeover
