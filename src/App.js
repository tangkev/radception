import React, { Component } from 'react';
import NavBarOn from './components/navbaron';
import NavBarOff from './components/navbaroff';
import Home from './views/Home';
import Inspiration from './views/Inspiration';
import Prototype from './views/Prototype';
import FinalProduct from './views/FinalProduct';
import Impact from './views/Impact';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      loggedOn: false,
      user: '',
      navbar: <NavBarOff />,
    }
  }

  updateLoggedOn = (e) => {
  	componentDidMount() {
  		this.setState(prevState => ({ loggedOn: !prevState.loggedOn }))
  		this.setState({ user: e })
	    if (this.loggedOn) {
	    	this.setState({ navbar: <NavBarOn /> })
	    }
	    else {
	    	this.setState({ navbar: <NavBarOff /> })	
	    }
  	}
  }

  render() {
    return (
      <BrowserRouter>
	  		<div>
	  			<Route exact={true} path='/' render={() => (
	    			<div className="App">
	    				{this.state.navbar}
	    				<Home />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/inspiration' render={() => (
	    			<div className="App">
	    				{this.state.navbar}
	    				<Inspiration />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/prototype' render={() => (
	    			<div className="App">
	    				{this.state.navbar}
	    				<Prototype />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/finalproduct' render={() => (
	    			<div className="App">
	    				{this.state.navbar}
	    				<FinalProduct />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/impact' render={() => (
	    			<div className="App">
	    				{this.state.navbar}
	    				<Impact />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signin' render={() => (
	    			<div className="App">
	    				{this.state.navbar}
	    				<SignIn loggedOn={this.state.loggedOn} user={this.state.user} updateLoggedOn={this.updateLoggedOn} />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signup' render={() => (
	    			<div className="App">
	    				{this.state.navbar}
	    				<SignUp />
	    			</div>
	  			)}/>
		  	</div>
			</BrowserRouter>
    );
  }
}

export default App;