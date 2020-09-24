import { actionTypes } from '../actions/ordersActions';

const INITIAL_STATE = {
		books: [],
};

export default (state=[], action) =>{
	switch(action.type){
	case actionTypes.FETCH_ORDERS_SUCESS: 
		return {
		...state,
		books: action.payload
	}
	default: 
		return state;
	}
}