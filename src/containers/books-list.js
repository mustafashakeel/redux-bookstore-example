import React,{Component} from 'react';

import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators}  from 'redux';

class BookList extends Component {
	renderList(){
		return this.props.books.map((book)=>{
			return (
				<li 
					key={book.title}
					onClick ={()=>this.props.selectBook(book)}
					className="list-group-item"
				>{book.title}</li>
				);
		})
	}

	render(){
		return (
			<ul className="lsit-group col-sm-4">
			{this.renderList()}
			</ul>
			)
	}
}

function mapStateToProps(state){
	// What ever is returned will show up as this.props.
	// inside the books BookList
	return {
		books:state.books
	}
}

// Anything returned from this function will end up as Props 
// on the BookList Container 

function mapDispatchToProps(dispatch){

	// When ever select Book is called the result should be passed
	// to all of our reducers 
	return bindActionCreators({
		selectBook:selectBook
	}, dispatch)
}
// Promote Book List from a component into a container 
// It needs to know about this new dispatch method, select Book 
// as a prop.


export default connect(mapStateToProps, mapDispatchToProps)(BookList);