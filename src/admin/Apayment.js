import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Asidebar from './Asidebar';

const Apayment = () => {
  const [userData, setUserData] = useState([]);


  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3005/paymentget');
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


  // ================================================================================

  const [filterid, setFilterUserName] = useState('');
  const [filterproject_id, setFilterteam_id] = useState('');
  const [filtertransid, setfiltertransid] = useState('');
  console.log(filtertransid);
  console.log(filterid);
  console.log(filterproject_id);

  const filteredUsers = userData.filter((user) => {

    const filterUseridCondition = filterid === '' || user.user_id  === parseInt(filterid,10);
    

    const filterproject_idCondition = filterproject_id === '' || user.project_id === parseInt(filterproject_id, 10);

    const filtertransCondition = filtertransid == ''||user.trans_id ==filtertransid;

    return (

      filterproject_idCondition &&
      filterUseridCondition &&
      filtertransCondition

    );
  });


  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2'>
            <Asidebar/>

          </div>
          <div className='col-lg-10'>
            <h1 style={{ fontFamily: 'Young Serif' }}>Payment Details</h1>
            <div className='row'>
              <div className=' d-flex' style={{ padding: '10px', marginLeft: '0px', justifyContent: 'space-evenly' }}>
                <input
                  type='text'
                  placeholder="trans id..."
                  name='status'
                  onChange={(e) => setfiltertransid(e.target.value)}

                />
                <input
                  type="number"
                  placeholder="projecyid..."
                  name='value'
                  onChange={(e) => setFilterteam_id(e.target.value)}

                />
                  <input
                  type="number"
                  placeholder="user id..."
                  name='value'
                  onChange={(e) => setFilterUserName(e.target.value)}

                />

              </div>
            </div>
            <div className='row'>
              <div className='col-lg-2'>

              </div>
              <div className="col-lg-12 table-responsive">
                <table className="table table-hover text-wrap text-start" style={{ color: '#ae8514' }}>
                  <thead>
                    <tr>
                      <th>Sno</th>
                      <th>Project ID</th>
                      <th>UserId</th>
                      <th>Total Cost</th>
                      <th>paid_amount</th>
                      <th> trans_id</th>
                      <th>balance_amount</th>
                      <th> created_on</th>
                      <th>updated_on</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((team,i) => {
                      const dt = team.created_on;
                      const dateFormat = dt.slice(0, 10);
                      const dateFormarReverse = dateFormat.split('-').reverse().join("-");
                      return (
                        <tr key={team.id}>
                          <td>{i+1}</td>
                          <td>{team.project_id}</td>
                          <td>{team.user_id}</td>
                          <td>{team.total_cost}</td>
                          <td>{team.paid_amount}</td>
                          <td>{team.trans_id}</td>
                          <td>{team.balance_amount}</td>
                          <td>{dateFormarReverse}</td>
                          <td>{team.updated_on}</td>
                          <td>{team.Status}</td>
                          
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        </div>



      </div>
    </>

  )
}

export default Apayment
