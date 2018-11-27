import React, { Component } from 'react';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import { Route } from 'react-router-dom'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

export default App;
