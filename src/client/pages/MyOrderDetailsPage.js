import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrderDetails } from '../actions/orderDetailsActions';
import { addToCartStart, removeFromCartStart } from '../actions/booksActions';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class OrderDetails extends Component{

	componentDidMount(){
		//this.props.fetchOrderDetails();
	}
	
	addToCart(book){
		this.props.addToCartStart(book.isbn);
	}
	
	removeFromCart(book){
		this.props.removeFromCartStart(book.isbn);
	}
	
	showAddToCartOrRemoveFromCart(book){
		let returnContent = "";
		if(book.addToCart){
			returnContent = <button onClick={()=>{this.removeFromCart(book)}}>Remvoe from Cart </button>
		}else{
			returnContent = <button onClick={()=>{this.addToCart(book)}}>Add to Cart </button>
		}
		return returnContent;
	}
	renderOrderDetails(){
		const book = this.props.books.filter(book => book.isbn == this.props.match.params.bookid)[0]
		return  ( book ? <div>
		
		{ book.thumbnailUrl ? <img src={book.thumbnailUrl} alt={book.thumbnailUrl} /> : null }
		{ book.price ? <label> BookPrice {book.price}</label> : null}
		<br/>
		{ book.authors ? <label> Author Name {this.getAuthorName(book.authors)}</label> : null }
		<br/>
		{ book.pageCount ? <label>  Page Count: {book.pageCount}</label> : null}
		<br/>
		{ book.isbn ? <label> ISBN: {book.isbn}</label> : null}
		<br/>
		{this.showAddToCartOrRemoveFromCart(book)}
		<Link to="/cart"> Buy Now  </Link>
		
		<br/>
		{  book.longDescription ? <label> {book.longDescription}</label> : null}
		</div> : null)
	}
	
	getAuthorName(authors){
		let authorNames = ""
		for (let entry of authors) {
			authorNames = authorNames + entry +", ";
			}
		return authorNames;
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
	return ({books: state.books.books});
}
//
//function loadData(store){
// return //store.dispatch(fetchOrderDetails()); 
//}

export default {
	component: connect(mapStateToProps, { fetchOrderDetails, addToCartStart, removeFromCartStart }) (OrderDetails)
}