import React from 'react'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import './User_info.css'


function Nav({ Toggle }) {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">
            <i className="navbar-brand bi bi-justify-left fs-4 icon w-25 " onClick={Toggle}></i>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"><i className='bi bi-justify'></i></button>

           

            {/* <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Log
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                        <button>Logout</button>
                    </li>
                </ul>

            </div> */}
        </nav>


    )
}

export default Nav