import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
export const getUsers = async () => await axios.get('/users');
export const getUser = async (id) => axios.get(`/users/${id}`);
export const addUser = async (user) => axios.post(`/users`,user);
export const editUser = async (id, user) => axios.put(`/users/${id}`,user);
export const deleteUser = async (id) => axios.delete(`/users/${id.id}`);