import React from "react";
import "./Header.css";
import { CgMenuRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { setActiveUserType } from "../../../../redux/slices/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import DrawerComponent from "../drawer/DrawerComponent";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const { data, userType } = login;

  const adminMenu = [
    {
      id: 1,
      title: "Employee",
      pathname: "/employee-dashboard",
      className: `${
        (location.pathname == "/employee-dashboard" ||
          location.pathname == "/add-employee") &&
        "navbar-item-active"
      }`,
      userType: "employee",
    },
    {
      id: 2,
      title: `Department`,
      pathname: "/department-dashboard",
      className: `${
        (location.pathname == "/department-dashboard" ||
          location.pathname == "/add-department") &&
        "navbar-item-active"
      }`,
      userType: "department",
    },
  ];

  const employeeMenu = [
    {
      id: 1,
      title: "Profile",
      pathname: `/add-employee/${data?.employee_id}`,
      className: `${
        (location.pathname == "/employee-dashboard" ||
          location.pathname == `/add-employee/${1}`) &&
        "navbar-item-active"
      }`,
      userType: "employee",
    },
  ];

  // const isAdmin = false;
  const menuToRendered = userType == "admin" ? adminMenu : employeeMenu;

  return (
    <>
      <div
        className="navbar-section"
        style={{ minWidth: `${userType == "employee" ? "100%" : "86%"}` }}
      >
        <div className="navbar-logo">
          <a>
            <Link
              to={`${userType == "employee" ? "#" : "/employee-dashboard"}`}
            >
              Clover Employee App
            </Link>
          </a>
        </div>
        <div className="navbar-right-box">
          {menuToRendered?.map((d, i) => {
            return (
              <Link
                className={d.className}
                to={d.pathname}
                onClick={() => dispatch(setActiveUserType(d.userType))}
              >
                <div>{d.title}</div>
              </Link>
            );
          })}
          {/* <Link
            className={`${
              location.pathname == "/employee-dashboard" && "navbar-item-active"
            }`}
            to="/employee-dashboard"
            onClick={() => dispatch(setActiveUserType("employee"))}
          >
            <div>Employee</div>
          </Link>
          <Link
            to="/department-dashboard"
            className={`${
              location.pathname == "/department-dashboard" &&
              "navbar-item-active"
            }`}
            onClick={() => dispatch(setActiveUserType("department"))}
          >
            <div>Department</div>
          </Link> */}
          <Link to="/">
            <div>Logout</div>
          </Link>
        </div>
      </div>

      <div className="mobile-header">
        <Link to="/employee-dashboard">Clover Employee App</Link>
        {/* <CgMenuRight color="#6966c7" /> */}
        <DrawerComponent />
      </div>
    </>
  );
};

export default Header;
