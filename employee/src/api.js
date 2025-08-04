import axios from "axios";

const API= axios.create({
    baseURL:"https://employeemanager-2j8v.onrender.com/api"
})

export default API;
