import React, { useEffect, useState } from 'react'

import './User_info.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Asidebar from './Asidebar';
import Ahome from './Ahome';


const Auser = () => {

  const [userData, setUserData] = useState([]);
  const [filterUserName, setFilterUserName] = useState('');
  const [filterteam_id, setFilterteam_id] = useState('');
  const [filterCreatedOn, setFilterCreatedOn] = useState('');



  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3005/getuserdata');
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleUpdate = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3005/deactivate/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        fetchUserData();
      } else {
        console.error('Failed to deactivate user');
      }
    } catch (error) {
      console.error('Error deactivating user:', error);
    }
  };

  const filteredUsers = userData.filter((user) => {

    const filterUserNameCondition = filterUserName === '' || user.name.toLowerCase().includes(filterUserName.toLowerCase());

    const filterteam_idCondition = filterteam_id === '' || user.team_id === parseInt(filterteam_id, 10);

    const filterCreatedOnCondition = filterCreatedOn === '' || user.created_on.startsWith(filterCreatedOn);

    return (

      filterteam_idCondition &&
      filterUserNameCondition &&
      filterCreatedOnCondition

    );
  });



  const activeUsers = filteredUsers.filter((user) => user.status === 1);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
          <Asidebar />

          </div>
          <div className='col-lg-10'>
            <Ahome/>

          </div>

        </div>
        <div className='row'>
          <div className='col-lg-2'>
         

          </div>
          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='d-flex mt-3' style={{ justifyContent: 'space-between' }}>

                  <h2 className='head1 ms-3 mt-3'>User Info</h2>

                  <div className='d-flex justify-content-around align-items-center w-75 mt-3 mb-2'>
                    <div >
                      <input
                        type="date"
                        placeholder="Created On (yyyy-mm-dd format)"
                        value={filterCreatedOn}
                        onChange={(e) => setFilterCreatedOn(e.target.value)}
                        style={{ width: '15vw' }} />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="User Name"
                        value={filterUserName}

                        onChange={(e) => setFilterUserName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Team ID"
                        value={filterteam_id}
                        onChange={(e) => setFilterteam_id(e.target.value)} />
                    </div>
                  </div>
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
          <div className='col-lg-10  table-responsive' >
            <table class="table table-hover text-wrap text-center">
              <thead class="" >
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Phone No</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Username</th>
                  <th>Team ID</th>
                  <th>Role ID</th>
                  <th>Status</th>
                  <th>Created on</th>
                  <th>Updated on</th>
                  <th>Deactivte</th>
                </tr>
              </thead>
              <tbody>
                {activeUsers.map((user) => {
                  const dt = user.created_on;
                  const dateFormat = dt.slice(0, 10);
                  const dateFormarReverse = dateFormat.split('-').reverse().join("-");

                  const dat = user.updated_on;
                  const updateFormat = dat.slice(0, 10);
                  const updateFormartReverse = updateFormat.split('-').reverse().join("-");

                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.phone_number}</td>
                      <td >{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.email}</td>
                      <td>{user.team_id}</td>
                      <td>{user.role_id}</td>
                      <td>{user.status}</td>
                      <td>{dateFormarReverse}</td>
                      <td>{updateFormartReverse}</td>
                      <td>
                        <button className='btn2' onClick={() => handleUpdate(user.id)}>
                          <i class="bi bi-person-x-fill"></i>
                        </button></td>
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
export default Auser


