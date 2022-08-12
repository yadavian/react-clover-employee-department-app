import React from "react";
import "./Sidenav.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidenav = () => {
  const location = useLocation();
  const home = useSelector((state) => state.home);

  const adminMenu = [
    {
      id: 1,
      title: "Dashboard",
      pathname: `${
        home.activeUserType == "employee"
          ? "/employee-dashboard"
          : "/department-dashboard"
      }`,
      className: `${
        location.pathname == "/employee-dashboard" ||
        location.pathname == "/department-dashboard"
          ? "sidebar-link-item-active"
          : "sidebar-link-item"
      }`,
    },
    {
      id: 2,
      title: `Add ${home.activeUserType}`,
      pathname: `${
        home.activeUserType == "department"
          ? "/add-department"
          : "/add-employee"
      }`,
      className: `${
        location.pathname == "/add-employee" ||
        location.pathname == "/add-department"
          ? "sidebar-link-item-active"
          : "sidebar-link-item"
      }`,
    },
  ];

  const employeeMenu = [
    {
      id: 1,
      title: "Profile",
      pathname: "/employee-dashboard",
      className: `${
        location.pathname == "/profile"
          ? "sidebar-link-item-active"
          : "sidebar-link-item"
      }`,
    },
  ];

  const isAdmin = true;
  const menuToRendered = isAdmin ? adminMenu : employeeMenu;
  return (
    <>
      <div className="sidenav">
        <div className="sidebar-header">
          <div className="sidebar-upper">
            <Link to="/">{/* <p>Clover</p> */}</Link>
            {/* <p>+</p> */}
          </div>
          <div className="sidebar-main-content">
            <img
              src={require("../../../../assets/images/common/clover-blog.jpg")}
              style={{ height: 75, width: 75, margin: "0rem 0rem 2rem 0rem" }}
            />
            <p>Clover Employee App</p>
          </div>
          <div className="sidebar-links">
            {menuToRendered?.map((d, i) => {
              return (
                <Link to={d.pathname}>
                  <div className={d.className}>
                    <p style={{ textTransform: "capitalize" }}>{d.title}</p>
                  </div>
                </Link>
              );
            })}

            {/* <Link
              to={`${
                home.activeUserType == "employee"
                  ? "/employee-dashboard"
                  : "/department-dashboard"
              }`}
            >
              <div
                className={`${
                  location.pathname == "/employee-dashboard" ||
                  location.pathname == "/department-dashboard"
                    ? "sidebar-link-item-active"
                    : "sidebar-link-item"
                }`}
              >
                <p>Dashboard</p>
              </div>
            </Link>
            <Link
              to={`${
                home.activeUserType == "employee"
                  ? "/add-employee"
                  : "/add-department"
              }`}
            >
              <div
                className={`${
                  location.pathname == "/add-employee" ||
                  location.pathname == "/add-department"
                    ? "sidebar-link-item-active"
                    : "sidebar-link-item"
                }`}
              >
                <p style={{ display: "inline-block" }}>Add</p>
                {home.activeUserType == "employee"
                  ? " Employee"
                  : " Department"}
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
