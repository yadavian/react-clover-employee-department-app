import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";
import AddDepartment from "../pages/department/add-department/AddDepartment";
import DepartmentDashboard from "../pages/department/department-dashboard/DepartmentDashboard";
import AddEmployeePage from "../pages/employee/add-employee/AddEmployeePage";
import EditEmployeePage from "../pages/employee/edit-employee/EditEmployeePage";
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

        <Route path="/department-dashboard" element={<DepartmentDashboard />} />
        <Route path="/add-department" element={<AddDepartment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
