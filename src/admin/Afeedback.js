import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Asidebar from './Asidebar';


const Afeedback = () => {
  const [userData, setUserData] = useState([]);
  const [filterUserName, setFilterUserName] = useState('');
  const [filterCreatedOn, setFilterCreatedOn] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3005/contactusget');
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

  const userfeedback = userData.filter((user) => {

    const filterUserNameCondition = filterUserName === '' || user.name.toLowerCase().includes(filterUserName.toLowerCase());

    const filterCreatedOnCondition = filterCreatedOn === '' || user.created_on.startsWith(filterCreatedOn);

    return (


      filterUserNameCondition &&
      filterCreatedOnCondition

    );
  });


  return (
    <>


      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>
          <Asidebar/>
          

          </div>
          <div className='col-lg-10'>
            <h2 style={{ textAlign: 'center', marginTop: '3%',marginBottom:"3%" }}>Feedback</h2>

            <div className='d-flex justify-content-evenly align-items-center mb-3 '>
              <div>
                <input type="date" placeholder='Date...'
                  value={filterCreatedOn}
                  onChange={(e) => setFilterCreatedOn(e.target.value)} style={{ width: '20vw' }} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name..."
                  value={filterUserName}
                  onChange={(e) => setFilterUserName(e.target.value)}
                />
              </div>
            </div>

          </div>

        </div>

        <div className='row'>
          <div className='col-lg-2'>

          </div>
          <div className=' col-lg-10 table-responsive' >
            <table class="table table-hover text-wrap text-center">
              <thead >
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Query</th>
                  <th>Created on</th>


                </tr>
              </thead>
              <tbody>
                {userfeedback.map((user) => {
                  const dt = user.created_on;
                  const dateFormat = dt.slice(0, 10);
                  const dateFormarReverse = dateFormat.split('-').reverse().join("-");

                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.user_id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.subject}</td>
                      <td>{user.query}</td>
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
export default Afeedback




