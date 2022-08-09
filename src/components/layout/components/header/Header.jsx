import React from "react";
import "./Header.css";
import { CgMenuRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { setActiveUserType } from "../../../../redux/slices/homeSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar-section">
        <div className="navbar-logo">
          <a>
            <Link to="/employee-dashboard">Clover Employee App</Link>
          </a>
        </div>
        <div className="navbar-right-box">
          
          <div
            className={`${
              location.pathname == "/employee-dashboard" && "navbar-item-active"
            }`}
          >
            <Link
              to="/employee-dashboard"
              onClick={() => dispatch(setActiveUserType("employee"))}
            >
              Employee
            </Link>
          </div>
          <div 
            className={`${
              location.pathname == "/department-dashboard" && "navbar-item-active"
            }`}>
            <Link
              to="/department-dashboard"
              onClick={() => dispatch(setActiveUserType("department"))}
            >
              Department
            </Link>
          </div>
          <div>
            <Link to="/">Logout </Link>
          </div>
        </div>
      </div>

      <div className="mobile-header">
        <p>Clover Employee App</p>
        <CgMenuRight color="#6966c7" />
      </div>
    </>
  );
};

export default Header;
