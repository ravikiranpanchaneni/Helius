import { actionTypes } from '../actions/cartActions';

export default (state=[], action) =>{
	switch(action.type){
	case actionTypes.FETCH_CART_SUCESS: 
			return action.payload;
	default: 
		return state;
	

	}
}