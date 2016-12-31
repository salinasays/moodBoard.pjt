import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'
import ImageSearch from './imageSearch.jsx';
import './App.css';
import Home from './home';
import Create from './create'; 
import Login from './login';
import About from './about';

var App = React.createClass({
  render: function() {
    return ( 
      <div>
      	<a href="http://linkedin.com/in/salinafu" target="_blank"><img className="ribbon" src={require('../imgs/salmonRibbon.png')} /></a>

      	<div className="logo-class">
        	<img className="logo" src={require('../imgs/reLogo.png')} />
       
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="nav navbar-nav">
              <Link to='/'>_home</Link> 
              <Link to='About'>_about</Link>
              <Link to='ImageSearch'>_search</Link>
              <Link to='Create'>_create</Link>
              <Link to='Login'>_login</Link>
            </div>
          </div>
        </nav>
        {this.props.children}

      </div>
    )
  }
}) 

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  	<IndexRoute component={Home} />
    <Route path="About" component={About} />
 		<Route path="ImageSearch" component={ImageSearch} />
 		<Route path="Create" component={Create} />
    // <Route path="Login" component={Login} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
