import { FETCH_MY_ORDERS } from '../actions/myOrdersActions';

export default (state=[], action) =>{
	switch(action.type){
	case FETCH_MY_ORDERS: 
		return action.payload.data;
	default: 
		return state;
	}
}