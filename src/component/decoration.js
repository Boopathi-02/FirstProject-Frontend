import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./decoration.css";
import Sidebar from './sidebar';
import axios from "axios"

const Decoration = () => {

  const url = "http://localhost:3005"


  // ================================================


  const [productget, setProductget] = useState([]);
  console.log(productget[0])
 

  useEffect(() => {
    axios.get("http://localhost:3005/prodget")
      .then(res => {
        setProductget(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // ==========================================================
  const id = localStorage.getItem('id')
  const [productidget1, setIdget] = useState([]);

  const sendDataToBackend = (productidget1,id) => {
   
      console.log(productidget1)
   
    const backendUrl = 'http://localhost:3005/cartUpdate';

    axios.post(backendUrl, { productidget1 , id })
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

          <div className='col-lg-10 dechead '>
            <h1>Decoration</h1>
            <h4>Wedding.Events</h4>
          </div>
        </div>

        {/* ========================================================================================== */}
        <div className='row '>
          <div className='col-lg-2'>

          </div>

          <div className='col-lg-10 mdec '>

            <h3>Marriage Events Decoration</h3>
          </div>
        </div>


        {/* ======================================================================================= */}

        <div className='row r1'>
          <div className='col-lg-2'></div>
          <div className='col-lg-10 ten'>
            <div className='row'>
              {
                productget.map((prod, i) => {
                  if (prod.sub_category === "marriage decoration") {
                    return (

                      <div className='col-lg-6 deccol' key={prod.id}>
                        <div className='cont'>
                          <div className='card'>
                            <div className='front'>
                              <img src={`${url}${prod.image}`} />

                            </div>
                            <div className='back'>
                              <p>{prod.description}</p>
                              <button onClick={() => {  sendDataToBackend(prod.id,id); }}>ADD To CART</button>

                            </div>
                          </div>
                        </div>
                      </div>
                    )


                  }

                })
              }


            </div>
          </div>
        </div>

        {/* </div> */}
        {/* ==================================================================== */}
        <div className='row '>
          <div className='col-lg-2'>

          </div>

          <div className='col-lg-10 mdec '>

            <h3>Birthday Party Decoration</h3>
          </div>
        </div>

        {/* ============================================================================================== */}
        <div className='row r1'>
          <div className='col-lg-2'>
          </div>

          <div className='col-lg-10 ten'>
            <div className='row'>
              {
                productget.map((prod, i) => {

                  if (prod.sub_category == " Birthday party decoration") {

                    return (
                      <div className='col-lg-6 deccol' key={prod.id}>
                        <div className='cont'>
                          <div className='card'>
                            <div className='front'>
                              <img src={`${url}${prod.image}`} />

                            </div>
                            <div className='back'>
                              <p>{prod.description}</p>
                              <button onClick={() => { sendDataToBackend(prod.id,id) }}>ADD To CART</button>

                            </div>
                          </div>
                        </div>
                      </div>
                    )


                  }
                })}


            </div>
          </div>
        </div>
        {/* ============================================================== */}
        <div className='row '>
          <div className='col-lg-2'>

          </div>

          <div className='col-lg-10 mdec '>

            <h3>Baby Shower Decoration</h3>
          </div>
        </div>
        {/* =================================================================== */}
        <div className='row r1'>
          <div className='col-lg-2'>

          </div>
          <div className='col-lg-10 ten'>
            <div className='row'>
              {productget.map((prod, i) => {
                if (prod.sub_category == "baby shower decoration") {
                  return (<div className='col-lg-6 deccol' key={prod.id}>
                    <div className='cont'>
                      <div className='card'>
                        <div className='front'>
                          <img src={`${url}${prod.image}`} alt="" />

                        </div>
                        <div className='back'>
                          <p>{prod.description}</p>
                          <button onClick={() => {sendDataToBackend(prod.id,id) }}>ADD To CART</button>

                        </div>
                      </div>
                    </div>
                  </div>)

                }


              })}


            </div>
          </div>
        </div>
        {/* ============================================================================================= */}



      </div>
    </>
  )
}

export default Decoration
