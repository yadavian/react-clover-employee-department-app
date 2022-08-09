import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidenav from "./components/sidenav/Sidenav";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-page">
        <Sidenav />
        <div className="layout-right-section">
          <Header />
          <div className="layout-middle-section">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
