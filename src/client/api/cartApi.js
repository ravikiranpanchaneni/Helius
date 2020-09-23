import axios from 'axios';

export const checkOutCart = ({books, isbnIds}) =>{
	console.log("checkout books isbns", isbnIds);
	return axios.get('http://localhost:3000/books.json')
}