import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import { hideLoading, showLoading } from "../../../redux/slices/homeSlice";
import {
  addDepartment,
  editDepartment,
  getDepartment,
} from "../../../services/departmentService";

const AddDepartment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [department, setDepartment] = useState({
    name: "",
    address: "",
  });

  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(department);
    dispatch(showLoading());
    if (id) {
      const response = await editDepartment(department, id);
      if (response.status == 200 || response.status == 201) {
        console.log("Department added.");
        dispatch(hideLoading());
        navigate("/department-dashboard");
      }
    } else {
      const response = await addDepartment(department);
      if (response.status == 200 || response.status == 201) {
        console.log("Department added.");
        dispatch(hideLoading());
        navigate("/department-dashboard");
      }
    }
  };

  const getDepartmentData = async () => {
    const response = await getDepartment(id);
    console.log(response);
    setDepartment(response.data);
  };

  React.useEffect(() => {
    dispatch(showLoading());
    getDepartmentData();
    dispatch(hideLoading());
  }, [id]);

  return (
    <Layout>
      <div className="container">
        <div className="col-md-8" style={{ margin: "0 auto" }}>
          <form onSubmit={handleFormSubmit}>
            <div className="form-container">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <label>Department Name</label>
                    <input
                      type="text"
                      name="name"
                      value={department.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label>Department Address</label>
                    <input
                      type="text"
                      name="address"
                      value={department.address}
                      onChange={handleChange}
                    />
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

export default AddDepartment;
