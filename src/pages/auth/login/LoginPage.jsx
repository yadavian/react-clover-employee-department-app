import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import SnackbarComponent from "../../../components/snackbar/SnackbarComponent";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../../redux/slices/homeSlice";
import {
  setData,
  setisLoggedIn,
  setloginData,
  setUserType,
} from "../../../redux/slices/loginSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:600px)");
  console.log(isMobile);

  let navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleSnackbar = () => {
    setOpenSnackbar(!openSnackbar);
  };

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(showLoading());
    console.log(loginInfo);

    if (loginInfo.email == "admin" && loginInfo.password == "123") {
      // alert("correct login credentials.");
      dispatch(hideLoading());
      dispatch(setUserType("admin"));
      dispatch(setisLoggedIn(true));
      toast.success("logged in, redirecting to dashboard.");
      navigate("/employee-dashboard");
    } else if (loginInfo.email == "ankit" && loginInfo.password == "123") {
      // alert("correct login credentials.");
      const employee_id = 1;
      dispatch(hideLoading());
      dispatch(setUserType("employee"));
      dispatch(setisLoggedIn(true));
      dispatch(setData({ employee_id: employee_id }));
      toast.success("logged in, redirecting to dashboard.");
      navigate(`/add-employee/${employee_id}`);
    } else {
      toast.error("incorrect creadentials.");
      dispatch(hideLoading());
      // alert("incorrect creadentials.");
    }
  };

  const handleLogin = () => {
    handleSnackbar();
    // navigate("/employee-dashboard");
  };

  return (
    <>
      <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        {/* <Layout> */}
        <div className="container">
          <div className="col-md-8" style={{ margin: "0 auto" }}>
            <form onSubmit={handleFormSubmit}>
              <div
                className="form-container"
                style={{
                  width: `${isMobile ? "80%" : "60%"}`,
                  // marginBottom: `${isMobile ? "50%" : "0%"}`,
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <div className="div-heading">Clover Login</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        value={loginInfo.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={loginInfo.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      {/* <Link to="/employee-dashboard"> */}
                      <button
                        type="submit"
                        className="custom-button"
                        // onClick={handleLogin}
                      >
                        Submit
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* </Layout> */}
      </div>
      {openSnackbar && (
        <SnackbarComponent
          msg={"Successully added"}
          open={openSnackbar}
          type={"success"}
          autoHideDuration={6000}
        />
      )}
    </>
  );
};

export default LoginPage;
