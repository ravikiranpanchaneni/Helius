import myOrders from '../../../public/books.json'

export const FETCH_MY_ORDERS = 'fetch_my_orders';

export const fetchMyOrders = () => async (dispatch) =>{
	const res = await  getData(); 
	dispatch( {
		type: FETCH_MY_ORDERS,
		payload: res
	});
}

function getData(){
	
return 	new Promise(function(resolve, reject) {
	    setTimeout(() => {
	      resolve(myOrders);
	    }, 1000);
	  })
}