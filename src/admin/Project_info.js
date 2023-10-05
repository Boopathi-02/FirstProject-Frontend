import React, { useEffect, useState } from 'react'
import './User_info.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Asidebar from './Asidebar';
import axios from 'axios';

const Project_info = () => {
  
  const id = localStorage.getItem('id');

 

  const [status, setStatus] = useState('');
  const [paymentstatus, setPaymentstatus] = useState('');
  const [amountE, setAmountE] = useState('');

  

  const sendDataToBackend = ( status,paymentstatus,amountE,user_id) => {
     


      const backendUrl = 'http://localhost:3005/projectUpdate';


      axios.post(backendUrl, { status, paymentstatus, amountE, user_id})
          .then((response) => {
              console.log('Data sent successfully:', response.data);
              alert('updated')
              window.location.reload();
          })
          .catch((error) => {
              console.error('Error sending data:', error);
          });
  };





  // ======================================================================

  const [projectData, setprojectData] = useState([]);
  console.log(projectData);


  const fetchprojectData = async () => {
    try {
      const response = await fetch(`http://localhost:3005/projectget?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        setprojectData(data);
       
      } else {
        console.error('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchprojectData();
  }, []);

  //console.log("data");
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='colg-lg-2'>
            <Asidebar />

          </div>
          <div className='col-lg-9'>
            <div className='ms'>


              <h2 style={{ textAlign: 'center', marginTop: '3%' }}>Project Info</h2>
              <div className='d-flex mt-5 mb-5 ms-20 justify-content-evenly align-items-center'>
                <div>
                  <input type="search" placeholder='Event date...' />
                </div>
                <div>
                  <input type="search" placeholder='to date...' />
                </div>
                <div>
                  <input type="search" placeholder='role type...' />
                </div>
              </div>


            </div>

          </div>


        </div>




        <div className='row'>
          <div className='col-lg-2'>

          </div>
          <div className=' col-lg-10 table-responsive' >
            <table class="table table-hover  text-wrap text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Prod ID</th>
                  <th>Team ID</th>
                  <th>Description</th>
                  <th>Eventdate</th>
                  <th>Venue</th>
                  <th>Estimated Value</th>
                  <th>Payment Status</th>
                  <th>Status</th>
                  <th>Image</th>
                  <th>Eventname</th>
                  <th>Orderdate</th>
                  <th>Amount Paid</th>
                  <th>Created On</th>
                  <th>Updated On</th>
                  <th>status </th>
                  <th>payment status</th>
                  <th>amount</th>
                  <th>Submit</th>




                </tr>
              </thead>
              <tbody>
                {projectData.map((project) => {
                  const prod_id = JSON.parse(project.prod_id);

                  if( prod_id[0]=='0' && prod_id[1]=='0' && prod_id[2]=='0' && prod_id[3]=='0' ){
                    return (null)


                  }else{
                  const dt = project.created_on;
                  const dateFormat = dt.slice(0, 10);
                  const dateFormarReverse = dateFormat.split('-').reverse().join("-");

                  const dat = project.updated_on;
                  const updateFormat = dat.slice(0, 10);
                   const updateFormartReverse = updateFormat.split('-').reverse().join("-");
                  // const eventdate = project.eventdate;
                  // const eventDate = eventdate.slice(0,10);
                  // const EventDate = eventDate.split('-').reverse().join("-");

                  return (
                    <tr key={project.id}>
                      <td>{project.id}</td>
                      <td>{project.user_id}</td>
                      <td>{project.prod_id}</td>
                      <td>{project.team_id}</td>
                      <td>{project.description}</td>
                      <td>{project.eventdate}</td>
                      <td>{project.venue}</td>
                      <td>{project.estimated_value}</td>
                      <td>{project.payment_status}</td>
                      <td>{project.status}</td>
                      <td>{project.image}</td>
                      <td>{project.eventname}</td>
                      <td>{project.orderdate}</td>
                      <td>{project.amount_paid}</td>
                      <td>{dateFormarReverse}</td>
                      <td>{updateFormartReverse}</td>
                      <td><input type="text" placeholder='give status'  onChange={e => setStatus(e.target.value)}/></td>
                      <td><input type="text" placeholder='give paymentstatus'  onChange={e => setPaymentstatus(e.target.value)}/></td>
                
                      <td><input type="text" placeholder='estimate amount' onChange={e => setAmountE(e.target.value)} /></td>

                      <td>
                        <button className='projectbtm' onClick={()=>{ sendDataToBackend(status,paymentstatus,amountE,project.user_id);}}>Submit</button>
                      </td>
                    </tr>
                  )

}})}
              </tbody>
            </table>
          </div>


        </div>
      </div>




    </>
  )
}

export default Project_info
