import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Layout from "../../../components/layout/Layout";
import SnackbarComponent from "../../../components/snackbar/SnackbarComponent";
import MuiTable from "../../../components/mui-table/MuiTable";
import {
  deleteEmployee,
  getEmployees,
} from "../../../services/employeeServices";

const EmployeeDashboardPage = () => {
  const [rows, setRows] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleSnackbar = () => {
    setOpenSnackbar(!openSnackbar);
  };

  const ROWS = [
    {
      id: 1,
      employeeID: 1,
      name: "Ankit",
      designation: "Software Engineer",
      department: "IT",
    },
    {
      id: 2,
      employeeID: 2,
      name: "Suraj",
      designation: "Software Engineer",
      department: "IT",
    },
    {
      id: 3,
      employeeID: 3,
      name: "Vishal",
      designation: "Software Engineer",
      department: "IT",
    },
  ];

  const headCells = [
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "Employee ID",
    },
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Employee Name",
    },
    {
      id: "designation",
      numeric: false,
      disablePadding: false,
      label: "Designation",
    },
    {
      id: "department",
      numeric: false,
      disablePadding: false,
      label: "department",
    },
    {
      id: "action",
      numeric: false,
      disablePadding: false,
      label: "Action",
    },
  ];

  const fetchEmployees = async () => {
    const response = await getEmployees();
    setRows(response.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployeeData = async (id) => {
    console.log(id);
    const response = await deleteEmployee(id);
    console.log(response);
    if (response.status == 200) {
      alert("deleted successfully.");
      fetchEmployees();
    }
  };

  return (
    <Layout>
      {/* <Button onClick={handleSnackbar}>Open simple snackbar</Button> */}
      {/* {openSnackbar && (
        <SnackbarComponent
          msg={"Successully added"}
          open={openSnackbar}
          type={"info"}
        />
      )} */}
      <MuiTable
        rows={rows}
        headCells={headCells}
        deleteEmployee={deleteEmployeeData}
      />
    </Layout>
  );
};

export default EmployeeDashboardPage;
