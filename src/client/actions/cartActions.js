
export const actionTypes = {
		FETCH_CART_START: 'fetch_cart_start',
		FETCH_CART_SUCESS: 'fetch_cart_sucess',
		FETCH_CART_FAILED: 'fetch_cart_failed'
}

export const fetchCartStart = () => ({
type: actionTypes.FETCH_CART_START
});


export const fetchCartSucess = (cartItems) => ({
type: actionTypes.FETCH_CART_SUCESS,
payload: cartItems
});
