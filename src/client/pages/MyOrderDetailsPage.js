import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrderDetails } from '../actions/orderDetailsActions';
import { Helmet } from 'react-helmet';

class OrderDetails extends Component{
	
	componentDidMount(){
		this.props.fetchOrderDetails();
	}
	renderOrderDetails(){
		return  this.props.orderDetails.map((details) => {
			return <li key={details.isbn}>{details.longDescription}</li>
		})
	}

	render(){
		return(
		<div>
		<Helmet>
		<title>My Orders Details Page</title>
		<meta property="og:title" content="My Orders Details Page"  />
		<meta property="og:description" content="All my orders details" />
		</Helmet>
		here is the big list of orderDetails: 
		<ul>{this.renderOrderDetails()} </ul>
		</div>
		)
	}
}

function mapStateToProps(state){
	return ({orderDetails: state.orderDetails});
}

function loadData(store){
 return store.dispatch(fetchOrderDetails()); 
}

export default {
	loadData: loadData,
	component: connect(mapStateToProps, { fetchOrderDetails }) (OrderDetails)
}