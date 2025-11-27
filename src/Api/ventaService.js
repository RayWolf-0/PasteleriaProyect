import axios from "axios";

const API_URL = "http://localhost:8082/api/v1/ventas";

export const registrarVenta = async (venta) => {
  const response = await axios.post(API_URL, venta, {
    headers: { "Content-Type": "application/json" }
  });
  return response.data;
};
