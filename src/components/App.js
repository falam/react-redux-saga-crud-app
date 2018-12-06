import React, { Component } from 'react';
import HomePage from './home/HomePage';
import BooksPage from './book/BooksPage';
import ManageBookPage from './book/ManageBookPage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/books" exact component={BooksPage} />
          <Route path="/book" exact component={ManageBookPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
