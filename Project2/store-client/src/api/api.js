import axios from "axios";

//const API = "https://671b70f62c842d92c37fec39.mockapi.io/productsapp/pets"
const API = "http://localhost:4000";

const getPets = () => axios.get(`${API}/pets/all`) / OrderEndPonts;

const addPet = (pets) => axios.post(`${API}/pets/add`, pet);
const deletePet = (id) => axios.delete(`${API}/pets/delete/${id}`);
const getOrders = () => axios.get(`${API}/orders/all`);
//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`);
//AuthEndponts
const Login = (data) => axios.post(`${API}/auth/login`, credentials);
const Register = (credentials) =>
  axios.post(`${API}/auth/register`, credentials);
export { getPets, getOrders, getUsers, Login, Register, addPet, deletePet };
