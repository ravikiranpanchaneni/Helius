import {combineReducers} from 'redux';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';
import myOrdersReducer from './myOrdersReducer';
import orderDetailsReducer from './orderDetailsReducer';

export default combineReducers({
	books: booksReducer,
	cartItems: cartReducer,
	myOrders: myOrdersReducer,
	orderDetails: orderDetailsReducer,
})