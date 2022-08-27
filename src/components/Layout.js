import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../layout.css";

function Layout({ children }) {
  const location = useLocation();

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
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="content">
          <div className="header">Header</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
