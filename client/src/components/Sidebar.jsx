import React, {useState, useEffect, useContext} from 'react';
import "./SidebarStyle.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
function Sidebar() {
 const SidebatItems = [
    {
        title : "Dashboard",
        url : "/",
        cName : "menu-item",
        icon : "fa-solid fa-home"
    },
    {
        title : "My Network",
        url : "/about",
        cName : "menu-item",
        icon: "fa-solid fa-users"
    },
    {
      title : "My Profile",
      url : "/about",
      cName : "menu-item",
      icon: "fa-solid fa-person-walking-luggage"
  },
    {
        title : "Jobs",
        url : "/service",
        cName : "menu-item",
        icon : "fa-solid fa-briefcase"
    },
    {
        title : "Message",
        url : "/contact",
        cName : "menu-item",
        icon : "fa-solid fa-message"
    }
];
const [currentDateTime, setCurrentDateTime] = useState(new Date());
const navigate = useNavigate();
const { logoutSender } = useContext(AuthContext)

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentDateTime(new Date());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await logoutSender();
    navigate('/account/login')
  } catch(err) {
    setError(err.response.data)
  }
  }
const formattedDateTime = currentDateTime.toLocaleString();
  return (
    <div className="sidebar-container">
    <div className="sidebar">
      <ul className="sidebar-menu">
      {SidebatItems.map((item, index) =>{
                    return (
                        <li key ={index}>
                        <Link className={item.cName} to={item.url}>
                          <i className={item.icon}></i>{item.title}
                        </Link>
                       </li>
                       
                       
                    );
                 })}
                 <li>
                  <Link onClick={handleSubmit}>
                    <i className='fa-solid fa-user'></i>Logout</Link>
                 </li>
      <li>{formattedDateTime}</li>          
      </ul>
    </div>
    <div className='sidebar-small'>
      <ul className='sidebar-menu-small'>
      {SidebatItems.map((item, index) =>{
                    return (
                        <li key ={index}>
                        <Link className={item.cName} to={item.url}>
                          <i className={item.icon}></i>
                        </Link>
                       </li>
                       
                       
                    );
                 })}
                 <li className='logout-sd'>
                  <Link onClick={handleSubmit}>
                    <i className='fa-solid fa-user'></i></Link>
                 </li>
                 
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;