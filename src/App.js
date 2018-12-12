import React, { Component } from 'react';
import NavBar from './components/navbar';
import Home from './views/Home';
import Inspiration from './views/Inspiration';
import Prototype from './views/Prototype';
import OurProduct from './views/OurProduct';
import Impact from './views/Impact';
import SignIn from './views/SignIn';
import SignOut from './views/SignOut';
import SignUp from './views/SignUp';
import Acknowledgements from './views/Acknowledgements';
import Dashboard from './views/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	rerenderHome: false,
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
		this.setState({ rerenderHome: true })
 	}

 	onAddDevice = (e) => {
 		this.state.devices.push(e)
 		if (this.state.devices[0] === '') {
 			this.state.devices.splice(0, 1)
 		}
 	}

 	onRerender = () => {
 		window.location.reload();
 	}

 	onPing = () => {
    const siteurl = 'https://radception-server.herokuapp.com/';
    axios({
      method: 'GET',
      url: siteurl
      })
      .then(res => {
      })
      .catch(err => {
      })
  }

  continuousPing = () => {   
    setInterval(this.onPing, 600000)  
  }

  render() {
  	const rerender = this.state.rerenderHome;

  	this.continuousPing()

  	if (rerender) {
  		return(
  			this.onRerender()
  		)
  	}
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
	  			<Route exact={true} path='/ourproduct' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<OurProduct />
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
	  			<Route exact={true} path='/acknowledgements' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} />
	    				<Acknowledgements />
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