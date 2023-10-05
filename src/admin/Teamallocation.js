import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Asidebar from './Asidebar';

const Teamallocation = () => {
  const [teamallocationData, setTeamallocationData] = useState([]);
  console.log(teamallocationData);

  const handleAdd = async (e) => {
    e.preventDefault();
    var data1 = new FormData(e.target);
    var dataget = { Headers: { "enctype": "multipart/form-data" } };
    axios.post("http://localhost:3005/teamallocation", data1, dataget)
      .then(function (response) {
        if (response) {
          e.target.reset();
          fetchTeamallocationData();
        }
      })
      .catch(function (error) {
        alert('error');
        window.location.reload();
      })
  }


  const fetchTeamallocationData = async () => {
    try {
      const response = await fetch('http://localhost:3005/teamallocationget');
      if (response.ok) {
        const data = await response.json();
        setTeamallocationData(data);
      } else {
        console.error('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTeamallocationData();

  }, []);



  return (
    <>
      <div className='container-fluid'>
        <div className='row mb-5 '>
          <div className='col-lg-2'>
          <Asidebar />

          </div>
          <div className='col-lg-10 mt-2 '>
            <div className='d-flex justify-content-center align-item-center'>
              <h4>TEAM ALLOCATION</h4>
            </div>
             
          </div>

        </div>
        <div className='row'>
          <div className='col-lg-2'>
          

          </div>
          <div className='col-lg-10'>
            <form onSubmit={handleAdd}>
              <div className="col-lg-10"  >
                <input
                  type='number'
                  placeholder="Project ID"
                  name='project_id'
                   style={{ marginLeft: '10px', marginTop: '6px' }}
                />
                <input
                  type='number'
                  placeholder="Team ID"
                  name='team_id'
                  style={{ marginLeft: '10px', marginTop: '6px' }}

                />
                <input
                  type="text"
                  placeholder="Description"
                  name='description'
                  style={{ marginLeft: '10px', marginTop: '6px' }}

                />
                <input
                  type="text"
                  placeholder="Remarks"
                  name='remarks'
                  style={{ marginLeft: '10px', marginTop: '6px' }}

                />
                <input
                  type="text"
                  placeholder="Status"
                  name='status'
                  style={{ marginLeft: '10px', marginTop: '6px' }}

                />
                <input
                  type="number"
                  placeholder="Value"
                  name='value'
                  style={{ marginLeft: '10px', marginTop: '6px' }}

                />
                <input
                  type="file"
                  placeholder=" Image"
                  name='image'
                  style={{ marginLeft: '10px', marginTop: '6px', border: 'none' }}
                />
                <button className='btn1 mt-2 ms-2 mb-3 text-center' type='submit' >Add</button>
              </div>

            </form>

          </div>

        </div>
        <div className='row'>
          <div className='col-lg-2'>

          </div>


          <div className="col-lg-10 table-responsive">
            <table className="table table-hover text-wrap text-start">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Project ID</th>
                  <th>Team ID</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Remarks</th>
                  <th>Status</th>
                  <th>Value</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                {teamallocationData.map((team) => {
                  const dt = team.created_on;
                  const dateFormat = dt.slice(0, 10);
                  const dateFormarReverse = dateFormat.split('-').reverse().join("-");
                  return (
                    <tr key={team.id}>
                      <td>{team.id}</td>
                      <td>{team.project_id}</td>
                      <td>{team.team_id}</td>
                      <td>{team.description}</td>
                      <td>{team.image}</td>
                      <td>{team.remarks}</td>
                      <td>{team.status}</td>
                      <td>{team.value}</td>
                      <td>{dateFormarReverse}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  );
};

export default Teamallocation;


