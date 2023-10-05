import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./payment.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Payment = () => {

    const id = localStorage.getItem('id')


    const [btnchange,setBtnchange]=useState(false)



    const [cartshow, setCartshow] = useState([]);
    const [fullamount, setfullamount] = useState('');
    const [advancepayment, setadvancepayment] = useState('');
    const [finalpayment, setfinalpayment] = useState('');

    console.log('cart', cartshow[0])
    useEffect(() => {
        axios.get(`http://localhost:3005/projectget?id=${id}`)
            .then(response => {
                setCartshow(response.data);
                console.log(response.data[0])
                if(response.data[0].payment_status !==null ){
                    setBtnchange(true)
                }



            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

// =======================================================
const[amount,setAmount]=useState('')

const handle =()=>{
   
    if(amount===''){
    
    }else{
      var option ={
        key:"rzp_test_QoxKUW0V8WCn7d",
        key_secret:"mbxBLBDVfHPi1rA5McSlqNly",
        amount:amount*100,
        currency:'INR',
        name:'nuuzze',
        description:'order booking',
        handler:function(response){
        //     alert(response.razorpay_payment_id)
        //   alert("advanced amount successfully send ");
          sendDataToBackend(fullamount,advancepayment,finalpayment, response.razorpay_payment_id,id)
        },
        prefill:{
          name:'boopathi',
          email:'boopathi@gmail.com',
          contact:'987656788765',
        
        },
        notes:{
          address:'nuzze office'
        },
        theme:{
          color:'#3399cc'
        }
  
      };
      var pay = new window.Razorpay(option);
      pay.open()
  
  
    }
  }
  

    // =================================================

    


    const sendDataToBackend = (total_cost,paid_amount,balance_amount,transactionid,user_id) => {
        const backendUrl = 'http://localhost:3005/payment';


        axios.post(backendUrl, { total_cost,paid_amount,balance_amount,transactionid,user_id })
            .then((response) => {
                if(response.data.status =='success'){
                    alert('advanced amount successfully send')
                    
                    setBtnchange(true)
                   
        
                   }else{
                    alert('fullamount successfully send')
                    window.location.reload()

                   }
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row mainrow'>
                    {
                        cartshow.map((payment, i) => {
                            return(
                            <div className='col-lg-12 mainbox'>
                                <div className='box'>
                                    <div className='head'>
                                        <h1>PAYMENT</h1>
                                        <h5>Wedding & Events</h5>
                                    </div>
                                    <div className='firstbox'>
                                        <h4>Estimate value</h4>
                                        <h6>💲{payment.estimated_value}</h6>
                                    </div>
                                    <div className='secondbox'>
                                        <h4>Advance Payment</h4>
                                        <div className='secondbox1'>
                                            <h6>💲{payment.estimated_value /2 }</h6>

                                            {
                                                btnchange == false ?(
                                                    <button  onClick={()=>{setfullamount(payment.estimated_value);setadvancepayment(payment.estimated_value /2);setfinalpayment(payment.estimated_value-payment.estimated_value /2);setAmount(payment.estimated_value /2);handle()}} >PAY</button>

                                                )
                                                :
                                                (
                                                    <h1><FontAwesomeIcon icon={faCheck} color='green' /></h1>
                                                    
                                                )
                                            }
                                            
                                        </div>

                                    </div>
                                    <div className='secondbox'>
                                        <h4> Second payment</h4>
                                        <div className='secondbox1'>
                                            <h6>💲{payment.estimated_value-payment.estimated_value /2}</h6>
                                            <button onClick={()=>{setfullamount(payment.estimated_value);setadvancepayment(payment.estimated_value-payment.estimated_value /2);setfinalpayment(0);setAmount(payment.estimated_value-payment.estimated_value /2);handle()}} >PAY</button>
                                        </div>

                                    </div>
                                    {/* <div className='firstbox'>
                                        <h4>Balance Amount</h4>
                                        <h6>💲</h6>
                                    </div> */}
                                    <div className='head'>
                                        <h1>STATUS</h1>
                                        <h5>Wedding & Events</h5>
                                    </div>
                                    <div className='statusbox'>
                                        <h5>PAYMENT Status : {payment.payment_status }</h5>
                                        <h5>Status : {payment.status }</h5>

                                    </div>



                                </div>
                            </div>
                            )

                        })
                    }

                </div>

            </div>

        </>
    )
}

export default Payment
