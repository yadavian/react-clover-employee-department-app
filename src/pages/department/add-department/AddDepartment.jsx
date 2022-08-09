import React, { useState } from "react";
import Layout from "../../../components/layout/Layout";

const AddDepartment = () => {
  const [deaprtmentName, setDeaprtmentName] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setDeaprtmentName({ ...deaprtmentName, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(deaprtmentName);
  };

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
                      value={deaprtmentName.name}
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
