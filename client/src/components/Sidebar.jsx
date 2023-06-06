import React, {useState, useEffect} from 'react';
import "./SidebarStyle.css"
import { Link } from 'react-router-dom';
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
    },
    {
        title : "Logout",
        url : "/login",
        cName : "menu-item",
        icon : "fa-solid fa-user"
    }
];
const [currentDateTime, setCurrentDateTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentDateTime(new Date());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, [])
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
      <li>{formattedDateTime}</li>          
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;