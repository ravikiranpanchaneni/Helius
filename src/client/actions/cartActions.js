import cartItems from '../../../public/books.json'

export const FETCH_MY_CART = 'fetch_my_cart';

export const fetchMyCart = () => async (dispatch) =>{
	const res = await  getData(); 
	dispatch( {
		type: FETCH_MY_CART,
		payload: res
	});
}

function getData(){
	
return 	new Promise(function(resolve, reject) {
	    setTimeout(() => {
	      resolve(cartItems);
	    }, 1000);
	  })
}