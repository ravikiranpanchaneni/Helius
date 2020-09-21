import { FETCH_BOOKS } from '../actions/booksActions';

export default (state=[], action) =>{
	switch(action.type){
	case FETCH_BOOKS: 
		return action.payload.data;
	default: 
		return state;
	}
}