import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Layout from "../../../components/layout/Layout";
import SnackbarComponent from "../../../components/snackbar/SnackbarComponent";
import MuiTable from "../../../components/mui-table/MuiTable";
import {
  deleteEmployee,
  getEmployees,
} from "../../../services/employeeServices";
import {
  deleteDepartment,
  getDepartments,
} from "../../../services/departmentService";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../../../redux/slices/homeSlice";
import { useDispatch } from "react-redux";

const DepartmentDashboardPage = () => {
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();

  const headCells = [
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "Department ID",
    },
    {
      id: "depName",
      numeric: false,
      disablePadding: false,
      label: "Department Name",
    },
    {
      id: "deptAddress",
      numeric: false,
      disablePadding: false,
      label: "Department Address",
    },
    {
      id: "action",
      numeric: false,
      disablePadding: false,
      label: "Action",
    },
  ];

  const fetchDepartment = async () => {
    const response = await getDepartments();
    setRows(response.data);
  };

  useEffect(() => {
    dispatch(showLoading());
    fetchDepartment();
    dispatch(hideLoading());
  }, []);

  const deleteDepartmentData = async (id) => {
    dispatch(showLoading());
    const response = await deleteDepartment(id);
    console.log(response);
    if (response.status == 200) {
      toast.success("department deleted.");
      fetchDepartment();
    }
    dispatch(hideLoading());
  };

  return (
    <Layout>
      <MuiTable
        rows={rows}
        headCells={headCells}
        deleteUser={deleteDepartmentData}
        entity="department"
      />
    </Layout>
  );
};

export default DepartmentDashboardPage;
