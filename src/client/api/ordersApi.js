import axios from 'axios';

export const getOrders = () =>{
	console.log("getting Orders  api");
	return axios.get('http://localhost:3000/books.json')
}