import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartStart } from '../actions/cartActions';
import { Helmet } from 'react-helmet';

class Cart extends Component{
	
	componentDidMount(){
		this.props.fetchCartStart();
	}
	renderCartItems(){
		return  this.props.cartItems.map((cartItem) => {
			return <li key={cartItem.isbn}>{cartItem.title}</li>
		})
	}

	render(){
		return(
		<div>
		<Helmet>
		<title>Cart Page </title>
		<meta property="og:title" content="Cart Page" />
		<meta property="og:description" content="All items in the cart" />
		</Helmet>
		here is the big list of cartItems: 
		<ul>{this.renderCartItems()} </ul>
		</div>
		)
	}
}

function mapStateToProps(state){
	return ({cartItems: state.cartItems});
}

function loadData(store){
 return store.dispatch(fetchCartStart()); 
}

export default {
	loadData: loadData,
	component: connect(mapStateToProps, { fetchCartStart }) (Cart)
}