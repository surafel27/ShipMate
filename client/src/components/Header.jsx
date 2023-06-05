import React, { useState, useEffect, useRef, useContext } from 'react';
//import Popup from './Popup';
import "./HeaderStyle.css"
import Profile from "../assets/profile.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

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
function HeaderDashboard(props) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const {currentUser} = useContext(AuthContext)

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return(
      <>
       <header >
       <div className="web-logo">
          <h1>shipmate</h1>
        </div>
         <div className="fixed-header">
         <div>
      <button onClick={togglePopup}>Open Pop-up</button>
      {showPopup && (
        <div ref={popupRef}>
          <Popup onClose={togglePopup} />
        </div>
      )}
    </div>
          <div className="notification-icon">
            <p>{currentUser?.fullName}</p>
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