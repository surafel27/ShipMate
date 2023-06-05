import React from 'react';
import "./SidebarStyle.css"
function Sidebar() {
  return (
    <div className="sidebar-container">
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item">Dashboard</li>
        <li className="menu-item">Mypackage</li>
        <li className="menu-item">Setting</li>
        <li className="menu-item">Logout</li>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;