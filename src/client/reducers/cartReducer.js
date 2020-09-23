import { actionTypes } from '../actions/cartActions';

const INITIAL_STATE = {
		cartItems: [],
};

export default (state=INITIAL_STATE, action) =>{
	switch(action.type){
	case actionTypes.CHECKOUT_CART_SUCESS: 
		let checkOutBooks = [...action.payload.books]
		for (var index in checkOutBooks) {
			let isISBNPresent = action.payload.isbnIds.includes(checkOutBooks[index].isbn);
			  if(isISBNPresent){
				  checkOutBooks[index].bought = !(checkOutBooks[index].bought);
			  }
			}
		return {
			...state,
			books: checkOutBooks,
			checkedOut: true
		}
	default: 
		return state;
	

	}
}