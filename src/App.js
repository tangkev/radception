import React, { Component } from 'react';
import NavBar from './components/navbar';
import Home from './views/Home';
import Inspiration from './views/Inspiration';
import Prototype from './views/Prototype';
import FinalProduct from './views/FinalProduct';
import Impact from './views/Impact';
import SignIn from './views/SignIn';
import SignOut from './views/SignOut';
import SignUp from './views/SignUp';
import Dashboard from './views/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      loggedOn: false,
      user: '',
      devices: [''],
    }
  }

 	onLoggedOn = (e, f) => {
		this.setState({ loggedOn: true })
		this.setState({ user: e })
		this.setState({ devices: f})
 	}

 	onLoggedOff = () => {
		this.setState({ loggedOn: false })
		this.setState({ user: '' })
		this.setState({ devices: [''] })
 	}

 	onAddDevice = (e) => {
 		this.state.devices.push(e)
 		if (this.state.devices[0] === '') {
 			this.state.devices.splice(0, 1)
 		}
 	}

  render() {
    return (
      <BrowserRouter>
	  		<div>
	  			<Route exact={true} path='/' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<Home />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/inspiration' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<Inspiration />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/prototype' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<Prototype />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/finalproduct' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<FinalProduct />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/impact' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<Impact />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signin' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<SignIn loggedOn={this.state.loggedOn} user={this.state.user} devices={this.state.devices} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signout' render={() => (
	    			<div className="App">
	    				<SignOut loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signup' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<SignUp />
	    			</div>
	  			)}/>
		  		<Route exact={true} path='/dashboard' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<Dashboard loggedOn={this.state.loggedOn} user={this.state.user} devices={this.state.devices} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} onAddDevice={this.onAddDevice} />
	    			</div>
	  			)}/>
		  	</div>
			</BrowserRouter>
    );
  }
}

export default App;