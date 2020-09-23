import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksStart, addToCartStart, removeFromCartStart } from '../actions/booksActions';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class Home extends Component{
	
	componentDidMount(){
		this.props.fetchBooksStart();
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
	renderBooks(){
		return  this.props.books.map((book) => {
			return(
					<div key={book.isbn} >
					<Link to={`/orderdetails/${book.isbn}`}> 
					<img src={book.thumbnailUrl} />	
							{book.title}
							{book.shortDescription}
					</Link>
					{this.showAddToCartOrRemoveFromCart(book)}
					</div>
			)
		})
	}

	render(){
		return(
		<div>
		<Helmet>
		<title>Books Home Page </title>
		<meta property="og:title" content="Books Home Page" />
		<meta property="og:description" content="All books page" />
		</Helmet>
		here is the big list of books: 
		<ul>{this.renderBooks()} </ul>
		</div>
		)
	}
}

function mapStateToProps(state){
	return ({books: state.books.books});
}

function loadData(store){
 return store.dispatch(fetchBooksStart()); 
}

export default {
	loadData: loadData,
	component: connect(mapStateToProps, { fetchBooksStart, addToCartStart, removeFromCartStart }) (Home)
}