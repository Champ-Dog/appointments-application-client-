import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../layout.css";

function Layout({ children }) {
  const location = useLocation();

  // Set user so username can be displayed
  const { user } = useSelector((state) => state.user);

  // Sidebar menu
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply as a Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];

  const menuToBeRendered = userMenu;

  // Rules for sidebar collapse/expand
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className="main">
      <div className="d-flex layout">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>Logo</h1>
          </div>

          {/* Iterate through defined menu items to populate sidebar menu */}
          <div className="menu">
            {menuToBeRendered.map((menu) => {
              // We wish to visually highlight the menu item for the current page/location.
              // To do this, we will conditionally add an extra class to a menu item when it's path is the same as the current page/location
              const isActive = location.pathname === menu.path;

              return (
                <div
                  className={`d-flex menu-item ${
                    // Grant 'active-menu-item' class to menu item when above condition is met
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  {/* Only show link (text) if Sidebar is expanded */}
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="content">
          <div className="header">
            {/* Display Close/Expand icons for Sidebar depending on current (opposing) State, 
            and change State appropriately to trigger behaviour e.g., show 
            Close icon when expanded and change Collapsed state to false */}
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}

            <div className="d-flex align-items-center px-4">
              <i className="ri-notification-line header-action-icon px-3"></i>
              {/* user? is used to prevent crashing when a user is not present/logged in */}
              <Link className="anchor" to="/profile">
                {user?.name}
              </Link>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
