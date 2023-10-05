import React, { useEffect, useState } from 'react'
import './User_info.css'
import Asidebar from './Asidebar';

const Team_info = () => {

  const [teamData, setTeamData] = useState([]);
  const [team_name, setteam_name] = useState('');

  const handleAdd = async () => {
    try {

      const response = await fetch('http://localhost:3005/teamtable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team_name }),
      });

      if (response.ok) {
        fetchTeamData();
        setteam_name('');

      } else {
        console.error('Failed to add team data to the database');
      }
    } catch (error) {
      console.error('Error adding team data:', error);
    }
  };

  const fetchTeamData = async () => {
    try {
      const response = await fetch('http://localhost:3005/teamtableget');
      if (response.ok) {
        const data = await response.json();
        setTeamData(data);
      } else {
        console.error('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTeamData();
  }, []);


  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
            <Asidebar/>
          </div>
          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2 className=' mt-4 text-center'>Team Info</h2>
                <div className='d-flex mt-3 ' style={{ justifyContent: 'space-around' }}   >
                  <input
                    type="text"
                    placeholder="Team Name"
                    value={team_name}
                    style={{ width: '20vw' }}
                    onChange={(e) => setteam_name(e.target.value)}
                  />
                  <button className='btn1' onClick={handleAdd}>Add</button>


                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
     

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>


          </div>
          <div className='col-lg-10  table-responsive mt-3' >
            <table class="table table-hover text-wrap text-center">
              <thead>
                <tr>
                  <th>Team ID</th>
                  <th>Team Name</th>
                  <th>Status</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((team) => {
                  const dt = team.created_on;
                  const dateFormat = dt.slice(0, 10);
                  const dateFormarReverse = dateFormat.split('-').reverse().join("-");
                  return (
                    <tr key={team.id}>
                      <td>{team.id}</td>
                      <td>{team.team_name}</td>
                      <td>{team.status}</td>
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
  )
}
export default Team_info










