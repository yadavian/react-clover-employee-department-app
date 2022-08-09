import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import SnackbarComponent from "../../../components/snackbar/SnackbarComponent";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const LoginPage = () => {
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
    console.log(loginInfo);
  };

  const handleLogin = () => {
    handleSnackbar();
    navigate("/employee-dashboard");
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
                        onClick={handleLogin}
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
