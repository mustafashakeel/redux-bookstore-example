import React, { Component } from 'react';

import BookList from '../containers/books-list';
import BookDetail from '../containers/book-detail';
export default class App extends Component {
  render() {
    return (<div>

      <div>React simple starter</div>
      <BookList />
      <BookDetail />
      </div>
    );
  }
}
