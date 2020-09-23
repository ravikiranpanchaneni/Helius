
export const actionTypes = {
		CHECKOUT_CART_START: 'checkout_cart_start',
		CHECKOUT_CART_SUCESS: 'checkout_cart_sucess',
		CHECKOUT_CART_FAILED: 'checkout_cart_failed'
}

export const checkoutCartStart = (books, isbnIds) => ({
type: actionTypes.CHECKOUT_CART_START,
payload: {books: books, isbnIds: isbnIds}
});


export const checkoutCartSucess = (payload) =>({
type: actionTypes.CHECKOUT_CART_SUCESS,
payload: payload
});

