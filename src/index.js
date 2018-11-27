import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import { browserHistory } from 'react-route
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore';
//import routes from './routes';
import './index.css';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
