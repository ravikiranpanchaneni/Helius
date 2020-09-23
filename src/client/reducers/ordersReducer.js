import { actionTypes } from '../actions/ordersActions';

export default (state=[], action) =>{
	switch(action.type){
	case actionTypes.FETCH_ORDERS_SUCESS: 
		return action.payload;
	default: 
		return state;
	}
}