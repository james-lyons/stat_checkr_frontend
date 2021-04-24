import React from 'react';
import App from './App';
import store from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
   <Router>
      <App/>
   </Router>, document.getElementById('root')
);
