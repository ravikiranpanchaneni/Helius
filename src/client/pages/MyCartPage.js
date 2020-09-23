import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkoutCartStart } from '../actions/cartActions';
import { Helmet } from 'react-helmet';
import CartItems from '../components/CartItems'
import PaymentInfo from '../components/PaymentInfo'

class Cart extends Component{
	
	constructor(props) {
	    super(props);
	    this.checkOut = this.checkOut.bind(this);
	  }
	
	componentDidMount(){
		//this.props.checkoutCartStart();
	}
	
	checkOut(total){
		let cartItems = this.props.books.filter(this.getCartItems);
		let len = cartItems.length;
		let isbnIds = [];
		for(let i=0; i< len; i++){
			isbnIds.push(cartItems[i].isbn);
		}
		this.props.checkoutCartStart( this.props.books, isbnIds)
		//this.props.history.push('/myorders')
	}

	cancelCheckout(){
		console.log("cancelCheckOut");
	}
	getCartItems(element, index, array){
		return element.addToCart==true;
	}
	
	renderCartItems(){
		let cartItems = this.props.books.filter(this.getCartItems);
		
		return (
			     <div>
				<ul> <CartItems cartItems={cartItems} > </CartItems> </ul>
				<PaymentInfo cartItems={cartItems}  checkOut={this.checkOut} cancelCheckout={this.cancelCheckout}> </PaymentInfo>
				</div>
				)
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
		{this.renderCartItems()} 
		</div>
		)
	}
}

function mapStateToProps(state){
	return ({books: state.books.books, checkedOut: state.checkedOut});
}

//function loadData(store){
// return store.dispatch(checkoutCartStart()); 
//}

export default {
	component: connect(mapStateToProps, { checkoutCartStart }) (Cart)
}