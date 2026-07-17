import axios from "axios";
const API=axios.create({baseURL:"http://localhost:8080/api/products",});
export const getProducts=() =>API.get("");
export const getProductById=(id) => API.get(`/${id}`);
export const addProduct=(product)=>API.post("",product);
export const updateProduct=(id,product) => API.put(`/${id}`,product);
export const deleteProduct=(id) => API.delete(`/${id}`);