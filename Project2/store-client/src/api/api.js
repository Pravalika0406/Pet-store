import axios from 'axios'



const API = "https://671b70f62c842d92c37fec39.mockapi.io/productsapp/pets"
// const API = "http://localhost:4000"



const getPets = () => axios.get(API)


export { getPets}