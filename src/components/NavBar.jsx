import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { images } from '../constant';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Button } from 'bootstrap';


function NavBar() {
  const navigate = useNavigate();
 
  const user = localStorage.getItem("userInfo");
  

  return (
    <div className="container-fluid nav-bar bg-transparent">
  <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 ">
  <Link to='/Home'
      href="index.html"
      className="navbar-brand d-flex align-items-center text-center"
    >
      <div className="icon p-2 me-2">
        {/* <img
          className="img-fluid"
          src={images.deal}
          alt="Icon"
          style={{ width: 30, height: 30 }}
        /> */}
      </div>
      <h1 className="m-0 text-primary">Travelo</h1>
    </Link >
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto">
      <Link to='/Home'
      href="index.html"
      className="navbar-brand d-flex align-items-center text-center"
    >
    </Link >
    {/* <Link to='/Home' href='' className="nav-item nav-link active">
          Home
        </Link> */}
              <Link to='/Buses' className="nav-item nav-link">
          Buses
        </Link>
        <Link to='/ticketsearch' className="nav-item nav-link">
          Your Ticket
        </Link>
  
        {/* <Link to='/About' className="nav-item nav-link">
          About
        </Link>
        <Link to='/contact' className="nav-item nav-link">
          Contact
        </Link> */}
        
        
      { !user && (
        <div className="navbar-nav ">
          <Link to='/login' className="nav-item nav-link" type='button'>
          Login
        </Link>
        <Link to='/register' className="nav-item nav-link" type='button'>
          Register
        </Link>
        </div>
      ) }
      { user && (
        <div className="navbar-nav">
         <Link to='/MyAccount' className="nav-item nav-link">
          My Account
        </Link>
        </div>
      ) }
        
        {/* <Link to='/contact' className="nav-item nav-link">
          Contact
        </Link> */}
        
        { user && (
        <div className="navbar-nav ms-auto">
        <button className="nav-item " type='button' onClick={()=>{
          localStorage.removeItem("userInfo")
          navigate('/home')}}>
          Logout
        </button>
        </div>
      ) }
        
      </div>
    </div>
  </nav>
  <Outlet />
</div>

  );
}

export default NavBar