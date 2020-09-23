import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrderDetails } from '../actions/orderDetailsActions';
import { Helmet } from 'react-helmet';

class OrderDetails extends Component{

	componentDidMount(){
		//this.props.fetchOrderDetails();
	}
	renderOrderDetails(){
		const book = this.props.books.filter(book => book.isbn == this.props.match.params.bookid)[0]
		console.log("book", book)
		return  ( book ? <div>
		
		{ book.thumbnailUrl ? <img src={book.thumbnailUrl} alt={book.thumbnailUrl} /> : null }
		<label> BookPrice</label>
		<br/>
		{ book.authors ? <label> Author Name {this.getAuthorName(book.authors)}</label> : null }
		<br/>
		{ book.pageCount ? <label>  Page Count: {book.pageCount}</label> : null}
		<br/>
		{ book.isbn ? <label> ISBN: {book.isbn}</label> : null}
		<br/>
		<button> Add to Cart </button>
		<button> Buy Now </button>
		
		<br/>
		{  book.longDescription ? <label> ISBN: {book.longDescription}</label> : null}
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
	return ({books: state.books});
}
//
//function loadData(store){
// return //store.dispatch(fetchOrderDetails()); 
//}

export default {
	component: connect(mapStateToProps, { fetchOrderDetails }) (OrderDetails)
}