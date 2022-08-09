import React, { useEffect, useState } from "react";
import "./AddEmployeePage.css";
import Layout from "../../../components/layout/Layout";
import {
  addEmployee,
  editEmployee,
  getEmployee,
  getEmployees,
} from "../../../services/employeeServices";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getDepartments } from "../../../services/departmentService";
import { designation } from "../../../data/employeeData";

const AddEmployeePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [departments, setDepartments] = useState([]);

  const [employeeInfo, setEmployeeInfo] = useState({
    name: "",
    salary: "",
    designation: "",
    department: "",
  });

  const handleChange = (e) => {
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(employeeInfo);
    if (id) {
      const response = await editEmployee(employeeInfo, id);
      if (response.status == 201 || response.status == 200) {
        alert("updated employee");
        navigate("/employee-dashboard");
      } else {
        alert("something went wrong with update !");
      }
    } else {
      const response = await addEmployee(employeeInfo);
      if (response.status == 201) {
        alert("added employee");
        navigate("/employee-dashboard");
      } else {
        alert("something went wrong !");
      }
    }
  };

  const getEmployeeData = async () => {
    const response = await getEmployee(id);
    console.log(response);
    setEmployeeInfo(response.data);
  };

  const getDepartmentsData = async () => {
    const response = await getDepartments();
    console.log(response);
    setDepartments(response.data);
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  useEffect(() => {
    getDepartmentsData();
  }, []);

  useEffect(() => {
    if (location.pathname == "/add-employee") {
      setEmployeeInfo({
        name: "",
        salary: "",
        designation: "0",
        department: "0",
      });
    }
  }, [location]);

  return (
    <Layout>
      <div className="container">
        <div className="col-md-8" style={{ margin: "0 auto" }}>
          <form onSubmit={handleFormSubmit}>
            <div className="form-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={employeeInfo.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Salary</label>
                    <input
                      type="text"
                      name="salary"
                      value={employeeInfo.salary}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Designation</label>
                    <select name="designation" onChange={handleChange}>
                      {/* <option value="0">Select Designation</option>  */}

                      {id ? (
                        <option value={employeeInfo.designation}>
                          {employeeInfo.designation}
                        </option>
                      ) : (
                        <option value="0">Select Department</option>
                      )}
                      {designation &&
                        designation.map((item, index) => {
                          return (
                            <>
                              <option value={item.name} key={index}>
                                {item.name}
                              </option>
                            </>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Department</label>
                    <select name="department" onChange={handleChange}>
                      {/* <option value="0">Select Department</option>
                      <option value="IT">Information Technology</option>
                      <option value="HR">Human Resource</option>
                      <option value="Hr Manager">Hr Manager</option> */}

                      {id ? (
                        <option value={employeeInfo.department}>
                          {employeeInfo.department}
                        </option>
                      ) : (
                        <option value="0">Select Department</option>
                      )}
                      {departments &&
                        departments.map((item, index) => {
                          console.log(departments);
                          return (
                            <>
                              <option key={index} value={item.name}>
                                {item.name}
                              </option>
                            </>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="custom-button">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddEmployeePage;
