import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrdersStart } from '../actions/ordersActions';
import { Helmet } from 'react-helmet';


class MyOrdersPage extends Component{
	
	componentDidMount(){
		this.props.fetchOrdersStart();
	}
	renderMyOrders(){
		return  this.props.myOrders.map((myOrder) => {
			return <li key={myOrder.isbn}>{myOrder.title}</li>
		})
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
	return ({myOrders: state.myOrders});
}

function loadData(store){
 return store.dispatch(fetchOrdersStart()); 
}

export default {
	loadData: loadData,
	component: connect(mapStateToProps, { fetchOrdersStart }) (MyOrdersPage)
}