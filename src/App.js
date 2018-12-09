import React, { Component } from 'react';
import NavBar from './components/navbar';
import Home from './views/Home';
import Inspiration from './views/Inspiration';
import Prototype from './views/Prototype';
import FinalProduct from './views/FinalProduct';
import Impact from './views/Impact';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
	  		<div>
	  			<Route exact={true} path='/' render={() => (
	    			<div className="App">
	    				<NavBar />
	    				<Home />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/inspiration' render={() => (
	    			<div className="App">
	    				<NavBar />
	    				<Inspiration />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/prototype' render={() => (
	    			<div className="App">
	    				<NavBar />
	    				<Prototype />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/finalproduct' render={() => (
	    			<div className="App">
	    				<NavBar />
	    				<FinalProduct />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/impact' render={() => (
	    			<div className="App">
	    				<NavBar />
	    				<Impact />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signin' render={() => (
	    			<div className="App">
	    				<NavBar />
	    				<SignIn />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signup' render={() => (
	    			<div className="App">
	    				<NavBar />
	    				<SignUp />
	    			</div>
	  			)}/>
		  	</div>
			</BrowserRouter>
    );
  }
}

export default connect() (App);