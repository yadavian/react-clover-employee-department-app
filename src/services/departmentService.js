
import axios from "axios";

export const getDepartments = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:3001/department/",
    });
    console.log("response =>", response);
    return response;
  };