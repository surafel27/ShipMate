import React, { useState, useEffect, useRef, useContext } from 'react';
//import Popup from './Popup';
import "./HeaderStyle.css"
import Profile from "../assets/profile.png"
import { Link } from 'react-router-dom';

function Header() {
return(
    <>
     <header className="non-fixed-header">
      <Link to="/" className='web-name'>
        <h1>shipmate</h1>
        </Link>
      </header>
    </>
)
}
function HeaderDashboard() {
  return(
      <>
       <header >
       <div className="web-logo">
          <h1>shipmate</h1>
        </div>
         <div className="fixed-header">
          <div className="notification-icon">
            <i className="fa fa-bell"></i>
          </div>
          <div className="user-photo">
             <img src={Profile} alt="User" />
          </div>
        </div>
        </header>
      </>
  )
  }
  const Headers = {
    header: Header,
    headerDashboard: HeaderDashboard
  }
export default Headers;