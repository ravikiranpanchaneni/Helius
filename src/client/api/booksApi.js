import axios from 'axios';

export const getBooks = () =>{
	return axios.get('http://localhost:3000/books.json')
}