import { actionTypes } from '../actions/booksActions';

export default (state=[], action) =>{
	switch(action.type){
	case actionTypes.FETCH_BOOKS_SUCESS: 
			return action.payload;
	default: 
		return state;
	

	}
}