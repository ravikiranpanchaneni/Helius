import { actionTypes } from '../actions/booksActions';

const INITIAL_STATE = {
		books: [],
};

export default (state=INITIAL_STATE, action) =>{
	switch(action.type){
	case actionTypes.FETCH_BOOKS_SUCESS: 
			return {
		...state,
		books: action.payload
		}
	case actionTypes.ADD_TO_CART_SUCESS: 
		const addCartbooks = [...state.books]
		for (var index in addCartbooks) {
			  if(addCartbooks[index].isbn == action.payload){
				  addCartbooks[index].addToCart = !(addCartbooks[index].addToCart);
				  break;
			  }
			}
		return {
			...state,
			books: addCartbooks
		}
	case actionTypes.REMOVE_FROM_CART_SUCESS: 
		const removeCartBooks = [...state.books]
		for (var index in removeCartBooks) {
			  if(removeCartBooks[index].isbn == action.payload){
				  removeCartBooks[index].addToCart = !(removeCartBooks[index].addToCart);
				  break;
			  }
			}
		return {
			...state,
			books: removeCartBooks
		}
	default: 
		return state;
	

	}
}