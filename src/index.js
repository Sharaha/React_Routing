import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Customer from './Customer';
import Product from './Product';


const routing=(
  <Router>
    <div>
      <Route exact path="/" component ={App} />
      <Route path="/Customer" component={Customer} />
      <Route path="/Product" component={Product}  />
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
