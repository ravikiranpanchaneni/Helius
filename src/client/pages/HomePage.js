import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooksStart } from '../actions/booksActions';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class Home extends Component{
	
	componentDidMount(){
		this.props.fetchBooksStart();
	}

	
	renderBooks(){
		return  this.props.books.map((book) => {
			//
			return(
					<div key={book.isbn} >
					<Link to={`/orderdetails/${book.isbn}`}> 
						{book.title}
					</Link>
					</div>
//					<li key={book.isbn} onClick={()=>{this.openBookDetails(book)}}>{book.title}</li>

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
	return ({books: state.books});
}

function loadData(store){
 return store.dispatch(fetchBooksStart()); 
}

export default {
	loadData: loadData,
	component: connect(mapStateToProps, { fetchBooksStart }) (Home)
}