import React from "react";
import { useParams } from "react-router-dom";

const EditEmployeePage = () => {
  let { id } = useParams();
  return <h3>Requested topic ID: {id}</h3>;
};

export default EditEmployeePage;
