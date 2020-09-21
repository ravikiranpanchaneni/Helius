import orderDetails from '../../../public/books.json'

export const FETCH_ORDER_DETAILS = 'fetch_order_details';

export const fetchOrderDetails = () => async (dispatch) =>{
	const res = await  getData(); 
	dispatch( {
		type: FETCH_ORDER_DETAILS,
		payload: res
	});
}

function getData(){
	
return 	new Promise(function(resolve, reject) {
	    setTimeout(() => {
	      resolve(orderDetails);
	    }, 1000);
	  })
}