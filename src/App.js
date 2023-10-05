
import './App.css';
import Sidebar from './component/sidebar';
import Home from './component/home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Services from './component/service';
import Login from './component/login';
import Decoration from './component/decoration';
import Makeover from './component/makeover';
import Photo from './component/photo';
import Contact from './component/contact';
import Cart from './component/cart';
import Payment from './component/payment';
import Catering from './component/catering';
import Teamallocation from './admin/Teamallocation';
import Project_info from './admin/Project_info';
import Team_info from './admin/Team_info';
import Afeedback from './admin/Afeedback';
import Apayment from './admin/Apayment';
import Product_info from './admin/Product_info';
import { useState } from 'react';
import Auser from './admin/Auser';
import Asidebar from './admin/Asidebar';
import Ahome from './admin/Ahome';
import Prod_update from './admin/productupdate';
import Teamprojectget from './admin/teamprojectget';


function App() {

  const [toggle, setToggle] = useState(true)
  const Toggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      {/* <Sidebar/> */}
      {/* <Home/> */}
      {/* <Payment/> */}
      {/* <Catering/> */}


      {/* <Asidebar/> */}
      {/* <Ahome/> */}
      {/* <Auser/> */}
      {/* <Team_info/> */}
      {/* <Teamallocation/> */}
      {/* <Project_info/> */}
      {/* <Product_info/> */}
      {/* <Afeedback/> */}
      {/* <Prod_update/> */}
      {/* <Teamprojectget/> */}
      





      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/decoration' element={<Decoration />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/makeover' element={<Makeover />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/catering' element={<Catering />} />
          <Route path='/payment' element={<Payment/>} />

          
          <Route path="/Auser" element={<Auser />} />
          <Route path="/Teamallocation" element={<Teamallocation />} />
          <Route path="/Project_info" element={<Project_info />} />
          <Route path="/Product_info" element={<Product_info />} />
          <Route path="/Team_info" element={<Team_info />} />
          <Route path="/Feedback" element={<Afeedback />} />
          <Route path="/Apayment" element={<Apayment />} />
          <Route path="/Prod_update" element={<Prod_update/>} />
          <Route path="/teamleader" element={<Teamprojectget/>} />
          <Route path="/sample" element={<Teamprojectget/>} />




        </Routes>
      </BrowserRouter>




      {/* =========================================================== */}






    </>


  );
}

export default App;
