
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./login.css"
import AOS from 'aos'
import axios from "axios"


const Login = () => {

  const [toggle, setToggle] = useState(false);
// =======================================================================================
const [useremail, setUseremail] = useState(' '); 


 

  const sendDataToBackend = () => {
    
    const backendUrl = 'http://localhost:3005/project';

   
    axios.post(backendUrl, { useremail })
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

// =========================================================================================

useEffect(() => {
  AOS.init({ duration: 1500 });
})

const[id,setId]=useState();
// =============================================register=========================================


const handleSubmit = (event) => {
  
  event.preventDefault();
  const data1 = new FormData(event.target);

  const getdata = { headers: { 'Content-Type': 'multipart/form-data' } };
  console.log(data1, getdata);
  
  axios.post("http://localhost:3005/usertable", data1, getdata)
    .then((res) => {
     
     
      if (res.data.status == "successfully") {
        sendDataToBackend();
        alert("Register successfully");
        console.log('det',res.data.detail[0].id);
        setId(res.data.detail[0].id);
       
        
        
        // window.location.reload();

       
        window.location.href = '/';
      } else if( res.data.status == "email already exist"){
        alert('your email already exist')
        window.location.reload();

      }
      else {
        alert('Error');
      }
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });
};







// ====================================================signin======================================
const signin=(event)=>{
  localStorage.clear();
  event.preventDefault();

  const datastring = new FormData(event.target);
  const config = {headers:{"enctype":"multipart/form-data"}};

  axios.post("http://localhost:3005/signin",datastring,config)
  
  .then((res)=>{
      if(res.data.status!=="success"){
          alert("invalid name")
          window.location.reload();
      }

      else if(res.data.status==="success" && res.data.details[0].role_id == 3){
          alert("Logged in");
          setId(res.data.details[0].id);
          window.location.href = '/';
      }else if(res.data.status==="success" && res.data.details[0].role_id == 1){
        alert("Logged in admin");
          setId(res.data.details[0].id);
          window.location.href = '/Auser';

      }else if(res.data.status==="success" && res.data.details[0].role_id == 2){
        alert("Logged in teamleader");
          setId(res.data.details[0].id);
          window.location.href = '/teamleader';

      }else if(res.data.status==="no records"){
        alert('no records')
      }
  })
}


console.log('id',id)
localStorage.setItem('id', id);


// ==================================================================================================


  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 full '>
            <div className='loginbox'>
              <div className='buttonbox'>
                <div id='btn' className= {toggle ? 'regbtn' : 'logbtn'}></div>
                <button className='btn togglebtn' onClick={() => setToggle(false)} >LOGIN</button>
                <button className='btn togglebtn' onClick={() => setToggle(true)}>REGISTER</button>
              </div>

              {
                toggle === false ? (
                  <form id='log' className='forminput'  onSubmit={signin} >
                    <input type="text" className='input-field' placeholder='Enter your email' name='email'    />
                    <input type="password" className='input-field' placeholder='password' name='password' />
                    <button className='btn submitbtn' > Login</button>
                  </form>
                ) : (
                  <form id='reg' className='regforminput'  onSubmit={handleSubmit} >
                    <input type="text" className='input-field' placeholder='Name' data-aos='fade-down' name='name'/>
                    <input type="number" className='input-field' placeholder='Phone no' data-aos='fade-down'name='phone_number'/>
                    <input type="email" className='input-field' placeholder='Email id' data-aos='fade-down' name='email' onChange={e=>setUseremail(e.target.value)}/>
                    <input type="password" className='input-field' placeholder='password' data-aos='fade-down' name='password'/>
                    <button className='btn regsubmitbtn' >Register</button>
                  </form>
                )
              }




            </div>


          </div>

        </div>

      </div>


    </>

  )
}

export default Login

