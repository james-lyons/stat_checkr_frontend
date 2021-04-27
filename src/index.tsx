import React from 'react';
import App from './App';
import store from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
   <Provider store={ store }>
      <Router>
         <App />
      </Router>
   </Provider>, document.getElementById('root')
);
