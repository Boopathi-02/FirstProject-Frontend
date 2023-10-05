import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css"
import "./catering.css"
import Sidebar from './sidebar';
import axios from 'axios';
const Catering = () => {

    const id = localStorage.getItem('id')
 
  
    const sendDataToBackend = ( productidget4,  id) => {
     
      const backendUrl = 'http://localhost:3005/cartUpdate';
  
      axios.post(backendUrl, { productidget4,  id })
      .then((res)=>{
        if(res.data.status==="no records"){
            alert(" register first")
            window.location.href = '/login';
        }else if(res.data.status =='onprocessing'){
            alert('onprocessing')
    
          }
       
       
    })
      
     
   
    }; 
  


    // ==================================================================

    const [productget, setProductget] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:3005/prodget")
            .then(res => {
                setProductget(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);



    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2'>
                    <Sidebar />
                    </div>
                    <div className='col-lg-10 catname'>
                        <h2>Catering</h2>
                        <h5>Wedding&Events</h5>

                    </div>

                </div>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-10 catone'>
                        <h2>Simple & Comfort Menu</h2>
                    </div>

                </div>
                <div className='row row1'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-10'>
                        <div className='row cole'>
                            
                            {productget.map((prod, i) => {
                                if (prod.sub_category === 'simple and confort menu') {
                                    const descriptions = JSON.parse(prod.description);
                                    
                

                                    return (
                                        <div className='col-lg-12 main1'   key={prod.id}>
                                            <div className='main'>

                                            
                                            <div className='col-lg-4 first'>
                                                <h3>Breakfast</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item4} </h6>
                                                </div>
                                                
                                            </div>
                                            <div className='col-lg-4 first'>
                                                <h3>Lunch</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item4} </h6>
                                                </div>
                                            </div>
                                            <div className='col-lg-4 first'>
                                                <h3>Dinner</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item4} </h6>
                                                </div>
                                            </div>
                                            
                                            </div>
                                        <button onClick={()=>{sendDataToBackend( prod.id,  id)}}>Add to cart</button>
                                            
                                            
                                        </div>
                                        
                                        
                                    );

                                }
                                return null; 
                            })}
                            
                        </div>
                    </div>
                </div>



                {/* ====================================================================================================================== */}
                <div className='row headrow2'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-10 catone'>
                        <h2>Premium Menu</h2>
                    </div>

                </div>

                <div className='row row1'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-10'>
                        <div className='row cole'>
                            
                            {productget.map((prod, i) => {
                                if (prod.sub_category === 'Premium menu') {
                                    const descriptions = JSON.parse(prod.description);
                                    
                

                                    return (
                                        <div className='col-lg-12 main1'   key={prod.id}>
                                            <div className='main'>

                                            
                                            <div className='col-lg-4 first'>
                                                <h3>Breakfast</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item4} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item5} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item6} </h6>
                                                </div>
                                                
                                            </div>
                                            <div className='col-lg-4 first'>
                                                <h3>Lunch</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item4} </h6>
                                                </div>
                                            </div>
                                            <div className='col-lg-4 first'>
                                                <h3>Dinner</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item4} </h6>
                                                </div>
                                            </div>
                                            
                                            </div>
                                        <button onClick={()=>{sendDataToBackend( prod.id,  id)}}>Add to cart</button>
                                            
                                            
                                        </div>
                                        
                                        
                                    );

                                }
                                return null; 
                            })}
                            
                        </div>
                    </div>
                </div>









                {/* =================================================================================== */}




                <div className='row headrow2'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-10 catone'>
                        <h2>Elite Menu</h2>
                    </div>

                </div>


                <div className='row row1'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-10'>
                        <div className='row cole'>
                            
                            {productget.map((prod, i) => {
                                if (prod.sub_category === 'Elite menu') {
                                    const descriptions = JSON.parse(prod.description);
                                    
                

                                    return (
                                        <div className='col-lg-12 main1'   key={prod.id}>
                                            <div className='main'>

                                            
                                            <div className='col-lg-4 first'>
                                                <h3>Breakfast</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item4} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item5} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item6} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item7} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item8} </h6>
                                                </div>
                                                
                                            </div>
                                            <div className='col-lg-4 first'>
                                                <h3>Lunch</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item4} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item5} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item6} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[0].item7} </h6>
                                                </div>
                                            </div>
                                            <div className='col-lg-4 first'>
                                                <h3>Dinner</h3>
                                                <div className='item'>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item1} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item2} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item3} </h6>
                                                <h6> <FontAwesomeIcon icon={faUtensils} />  {descriptions[1].item4} </h6>
                                                </div>
                                            </div>
                                            
                                            </div>
                                        <button onClick={()=>{sendDataToBackend( prod.id,  id)}}>Add to cart</button>
                                            
                                            
                                        </div>
                                        
                                        
                                    );

                                }
                                return null; 
                            })}
                            
                        </div>
                    </div>
                </div>










                {/* =========================================================================================================================================== */}


            </div>
        </>
    )
}

export default Catering
