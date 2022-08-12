import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import AddDepartmentPage from "../pages/department/add-department/AddDepartmentPage";
import DepartmentDashboardPage from "../pages/department/department-dashboard/DepartmentDashboardPage";
import AddEmployeePage from "../pages/employee/add-employee/AddEmployeePage";
import EmployeeDashboardPage from "../pages/employee/employee-dashboard/EmployeeDashboardPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/employee-dashboard" element={<EmployeeDashboardPage />} />
        <Route path="/add-employee" element={<AddEmployeePage />} />
        <Route path={`/add-employee/:id`} element={<AddEmployeePage />} /> 

        <Route path="/department-dashboard" element={<DepartmentDashboardPage />} />
        <Route path="/add-department" element={<AddDepartmentPage />} />
        <Route path={`/add-department/:id`} element={<AddDepartmentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
