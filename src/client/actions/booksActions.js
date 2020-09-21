import books from '../../../public/books.json'
import axios from 'axios';

export const FETCH_BOOKS = 'fetch_books';

export const fetchBooks = () => async (dispatch) =>{
	const res = await getData(); 
	dispatch( {
		type: FETCH_BOOKS,
		payload: res
	});
}

function getData(){
	
return 	new Promise(function(resolve, reject) {
	    setTimeout(() => {
	      resolve(books);
	    }, 1000);
	  })
}