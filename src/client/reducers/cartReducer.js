import { FETCH_MY_CART } from '../actions/cartActions';

export default (state=[], action) =>{
	switch(action.type){
	case FETCH_MY_CART: 
		return action.payload.data;
	default: 
		return state;
	}
}