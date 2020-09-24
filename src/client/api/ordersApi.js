import axios from 'axios';

export const getOrders = () =>{
	console.log("getting Orders  api");
	return JSON.parse(localStorage.getItem('books'));
	//return axios.get('http://localhost:3000/books.json')
}