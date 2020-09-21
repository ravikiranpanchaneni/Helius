import { FETCH_ORDER_DETAILS } from '../actions/orderDetailsActions';

export default (state=[], action) =>{
	switch(action.type){
	case FETCH_ORDER_DETAILS: 
		return action.payload.data;
	default: 
		return state;
	}
}