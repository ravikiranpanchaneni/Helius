import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrdersStart } from '../actions/ordersActions';
import { Helmet } from 'react-helmet';
import OrderItems from '../components/OrderItems'


class MyOrdersPage extends Component{
	
	componentDidMount(){
		//this.props.fetchOrdersStart();
	}
	
	getOrderedItems(element, index, array){
		return element.bought==true;
	}
	renderMyOrders(){
		
		console.log("this.props.books orders page", this.props.books)
		let orderItems = this.props.books.filter(this.getOrderedItems);
		console.log("cartItems in orders page", orderItems)
		return  (<ul><OrderItems orderItems={orderItems} > </OrderItems> </ul>)
	}

	render(){
		return(
		<div>
		<Helmet>
		<title>My Orders Page</title>
		<meta property="og:title" content="My Orders Page"  />
		<meta property="og:description" content="All my orders" />
		</Helmet>
		here is the big list of myOrders: 
		<ul>{this.renderMyOrders()} </ul>
		</div>
		)
	}
}

function mapStateToProps(state){
	return ({books: state.books.books});
}

//function loadData(store){
// return store.dispatch(fetchOrdersStart()); 
//}

export default {
	component: connect(mapStateToProps, { fetchOrdersStart }) (MyOrdersPage)
}