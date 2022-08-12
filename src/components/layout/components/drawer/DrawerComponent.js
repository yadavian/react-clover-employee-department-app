import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { CgMenuRight } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useLocation } from "react-router-dom";
import "./DrawerComponent.css";

export default function DrawerComponent() {
  const location = useLocation();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const lists = [
    {
      id: 1,
      title: "Employee",
      pathname: "",
      sublist: [
        { id: 1, title: "Dashboard", pathname: "/employee-dashboard" },
        { id: 1, title: "Add Employee", pathname: "/add-employee" },
      ],
    },
    {
      id: 2,
      title: "Department",
      pathname: "",
      sublist: [
        { id: 1, title: "Dashboard", pathname: "/department-dashboard" },
        { id: 1, title: "Add Department", pathname: "/add-department" },
      ],
    },
  ];

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <CgMenuRight
            color="var(--dark-purple)"
            onClick={toggleDrawer(anchor, true)}
          />

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "0rem 1rem",
                }}
              >
                <p style={{ padding: "2rem 0rem" }}>
                  <Link to="/employee-dashboard">Clover Employee App</Link>
                </p>
                <ImCross
                  color="var(--dark-purple)"
                  onClick={toggleDrawer(anchor, false)}
                />
              </div>

              {lists?.map((list, i) => {
                return (
                  <div className="mobile-drawer-list">
                    <>
                      <div className="mobile-drawer-list-title">
                        <Link to="">{list.title}</Link>
                      </div>
                      <>
                        {list.sublist?.map((sl, i) => {
                          return (
                            <>
                              <div
                                className="mobile-drawer-list-item"
                                style={{
                                  borderLeft: `${
                                    location.pathname == sl.pathname
                                      ? "3px solid var(--dark-purple)"
                                      : "3px solid rgba(0, 0, 0, 0.300)"
                                  }`,
                                  color: `${
                                    location.pathname == sl.pathname
                                      ? "var(--dark-purple)"
                                      : "rgba(0, 0, 0, 0.300)"
                                  }`,
                                }}
                              >
                                <Link to={sl.pathname}>{sl.title}</Link>
                              </div>
                            </>
                          );
                        })}
                      </>
                    </>
                  </div>
                );
              })}

              {/* <div className="mobile-drawer-list">
                <div className="mobile-drawer-list-title">
                  <Link to="">Employee</Link>
                </div>
                <div className="mobile-drawer-list-item">
                  <Link to="">Dashboard</Link>
                </div>
                <div className="mobile-drawer-list-item">
                  <Link to="">Add Employee</Link>
                </div>
              </div> */}
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
