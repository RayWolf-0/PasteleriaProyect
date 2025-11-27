import axios from "axios";



const axiosClient = axios.create({

 baseURL: "http://localhost:8000/v1/api/usuarios/login",

 headers: {

  "Content-Type": "application/json",

  

 },

});



export default axiosClient;