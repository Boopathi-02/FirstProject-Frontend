import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "lottie-react"
import mail from "../json/mail.json"
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import AOS from 'aos'
import axios from "axios";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    })
    // ==========================================================  
    const handlesubmit=(event)=>{
        event.preventDefault();
        var data1=new FormData(event.target);
        var dataget={Headers:{"enctype":"multipart/form-data"}};
        axios.post("http://localhost:3005/contactusdata",data1,dataget)
         .then(function(res){
             if(res.data.status == "register first"){
                alert("register first")
                 window.location.href="";
             }else if(res.data.status == "data collected successfully"){
                alert("data collected successfully")

             }else{
                alert("error")
             }
         })
        }
    
    




    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-10 cmaindiv '>

                        <div className='container condiv w-75'>
                            <div className='row'>
                                <div className='col-lg-6 lottiediv'>
                                    <Lottie animationData={mail} loop={true} className='maillottie' />
                                </div>
                                <div className='col-lg-6'>
                                    <div className='inputdiv'>
                                        <h1 data-aos='fade-zoom'>Contact Us</h1>
                                        <h3 data-aos='fade-zoom'>Wedding.Events</h3>
                                        <form onSubmit={handlesubmit}>
                                            <input type="text" placeholder='Enter your name' className='input1' name='name' data-aos='fade-zoom' />
                                            <input type="email" placeholder='Enter your email' className='input1' name='email' data-aos='fade-zoom' />
                                            <input type="text" placeholder='Subject' className='input1' name='subject' data-aos='fade-zoom' />
                                            <textarea placeholder='Message' className='input2' name='query' data-aos='fade-zoom' ></textarea>
                                            <button className='input3' data-aos='fade-zoom'><FontAwesomeIcon icon={faPaperPlane} />Send Email</button>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact