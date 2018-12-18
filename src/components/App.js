import React, { Component } from 'react';
import HomePage from './home/HomePage';
import BooksPage from './book/BooksPage';
import ManageBookPage from './book/ManageBookPage';
import AboutPage from './about/AboutPage';
import LogoPage from './about/LogoPage';
import Header from './common/Header';
import NoMatchPage from './common/NoMatchPage';
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
          {/*<Route path={["/book", "/book/:isbn"]} component={ManageBookPage} /> Supported from react-router 4.4.x */}
          <Route path="/book/:isbn" component={ManageBookPage} />
          <Route path="/book" component={ManageBookPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/logo" component={LogoPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
