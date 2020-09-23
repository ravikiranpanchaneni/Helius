import {combineReducers} from 'redux';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';
import orderDetailsReducer from './orderDetailsReducer';

export default combineReducers({
	books: booksReducer,
	cartItems: cartReducer,
	myOrders: ordersReducer,
	orderDetails: orderDetailsReducer,
});