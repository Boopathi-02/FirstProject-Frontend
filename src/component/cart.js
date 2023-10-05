import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./cart.css"
import Sidebar from './sidebar';
import axios from 'axios';
import Lottie from "lottie-react";
import addcart from "../json/add cart.json"


const Cart = () => {
    const id = localStorage.getItem('id');


    const url = "http://localhost:3005"

    const[toggle,setToggle]=useState(false)


    // ==============================

    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState('');

   

    const sendDataToBackend = (description,date,venue,user_id) => {
   


        const backendUrl = 'http://localhost:3005/projectUpdate';


        axios.post(backendUrl, { description, date, venue, user_id })
            .then((response) => {
                if(response.data.status =='successfully update'){
                    alert('waiting for confirmation')
                    window.location.reload()
        
                   }else if(response.data.status =='not register'){
                    alert('register first')
                    window.location.reload()
                   }else if(response.data.status =='fill all detials'){
                    alert('enter full detial first')

                   }
                
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };

    // ==================================================================
    const sendpayment = (user_id) => {



        const backendUrl = 'http://localhost:3005/payment';


        axios.post(backendUrl, { user_id })
            .then((response) => {
                if(response.data.status =='success'){
                    window.location.href='/payment'
        
                   }
                
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };




    //   ============================================================

    const handleUpdate = async (productId,id) => {
        try {
          const response = await fetch(`http://localhost:3005/cartremove/${productId}/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
          })
         .then((res)=>{
            if(res.data.status =='onprocess'){
                alert('your is ongoing')
                window.location.reload()
            }
          

         })
    
          
        } catch (error) {
          console.error('Error deactivating user:', error);
        }
      };


    // ====================================================
    const [cartshow, setCartshow] = useState([]);
    console.log('crat', cartshow)
    useEffect(() => {
        axios.get(`http://localhost:3005/projectget?id=${id}`)
            .then(response => {
                setCartshow(response.data);
                if(response.data[0].status !=0){
                    setToggle(true)
                }

            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // =========================================

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2'>  <Sidebar /> </div>
                    <div className='col-lg-10 cart-head'>
                        <h1> MY CART</h1>
                        <h4>Wedding.Events</h4>
                    </div>
                </div>

                {/* ================================================================= */}

                <div className='row'>
                    <div className='col-lg-2'>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            {
                                cartshow.map((prod, i) => {
                                    const prodIdArray = JSON.parse(prod.prod_id);
                                    const prodNameArray = JSON.parse(prod.prod_name);
                                    const imageArray = JSON.parse(prod.image);

                                    const cartItems = prodIdArray.map((productId, j) => {
                                        if (productId !== 0) {
                                            return (
                                                <div className='col-lg-12 cart-main' key={j}>
                                                    <img src={`${url}${imageArray[j]}`} alt="" />
                                                    <div className='cart-contain'>
                                                        <h6>Product ID: {productId}</h6>
                                                        <h6>Product Name: {prodNameArray[j]}</h6>
                                                    </div>
                                                    <button onClick={() => { handleUpdate(productId , id); }} >REMOVE</button>
                                                </div>
                                            );
                                        }
                                        return null;
                                    });

                                    if (cartItems.every(item => item === null)) {
                                        return (
                                            <div className='col-lg-12 cart-m ' key={i}>
                                                <Lottie animationData={addcart} className='hear'/>
                                                <p>Your cart is empty....</p>
                                            </div>
                                        );
                                    }

                                    return cartItems;
                                })

                            }

                        </div>


                    </div>
                    

                    <div className='col-lg-1'>

                    </div>

                </div>


                {/* ===================================================================================== */}

                <div className='row cartrow2'>
                    <div className='col-lg-5'>

                    </div>
                    <div className='col-lg-4 cart-payment'>
                        <textarea cols="30" rows="4" placeholder='customer opinion..' onChange={e => setDescription(e.target.value)} ></textarea>
                        <input type="date" placeholder='EVENT DATE' onChange={e => setDate(e.target.value)} />
                        <input type="text" placeholder='event venue' onChange={e => setVenue(e.target.value)} />
                        {
                            toggle ===false ?(
                                <button onClick={()=>{sendDataToBackend(description,date,venue,id)}}>confirm</button>

                            )
                            :
                            (
                            <button className='payment' onClick={()=>{sendpayment(id)}} >PAYMENT</button>

                            )
                        }

                        


                    </div>
                    <div className='col-lg-3'>

                    </div>

                </div>

            </div>



            
        </>
    )
}

export default Cart
