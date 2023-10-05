import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

const Teamprojectget = () => {
    const id = localStorage.getItem('id');




    const [project, setProject] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3005/teamallocationget?id=${id}`)
            .then(response => {
                setProject(response.data);

            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 style={{ fontFamily: 'Young Serif', marginLeft:'40%' }}>Team Obligation</h1>
                        <div className='row'>
                            <div className='col d-flex' style={{ padding: '10px', marginLeft: '0px', justifyContent: 'space-evenly' }}>
                                <input
                                    type="number"
                                    placeholder="Team Id..."
                                    name='status'
                               
                                />
                                <input
                                    type="number"
                                    placeholder="Project id..."
                                    name='value'
                           
                                />
                                <a href="/login" style={{textDecoration:'none' , color:'red'}}><h6>Logout</h6></a>


                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-lg-12 table-responsive">
                                <table className="table table-hover text-wrap text-start" style={{ color: '#ae8514' }}>
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
                                            <th>Submit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {project.map((team,i) => {
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
                                                    <td><input type="text" placeholder='remarks...' 
                                                      
                                                    /></td>
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
                </div>



            </div>
        </>

    )
}

export default Teamprojectget
