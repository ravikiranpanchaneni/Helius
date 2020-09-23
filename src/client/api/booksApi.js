import axios from 'axios';

export const getBooks = () =>{
	console.log("books api called");
	return axios.get('http://localhost:3000/books.json')
}

export const addToCart = (isbn) =>{
	console.log("adding to cart", isbn);
	return axios.get('http://localhost:3000/books.json')
}

export const removeFromCart = (isbn) =>{
	console.log("removing from cart", isbn);
	return  axios.get('http://localhost:3000/books.json')
}

export const clearData = () =>{
	data = undefined;
}