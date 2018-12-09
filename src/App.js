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
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      loggedOn: false,
      user: '',
    }
  }

 	onLoggedOn = (e) => {
		this.setState({ loggedOn: true })
		this.setState({ user: e })
 	}

 	onLoggedOff = () => {
		this.setState({ loggedOn: false })
		this.setState({ user: '' })
 	}

  render() {
    return (
      <BrowserRouter>
	  		<div>
	  			<Route exact={true} path='/' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    				<Home />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/inspiration' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    				<Inspiration />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/prototype' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    				<Prototype />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/finalproduct' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    				<FinalProduct />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/impact' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    				<Impact />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signin' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    				<SignIn loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signout' render={() => (
	    			<div className="App">
	    				<SignOut loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    			</div>
	  			)}/>
	  			<Route exact={true} path='/signup' render={() => (
	    			<div className="App">
	    				<NavBar loggedOn={this.state.loggedOn} user={this.state.user} onLoggedOn={this.onLoggedOn} onLoggedOff={this.onLoggedOff} />
	    				<SignUp />
	    			</div>
	  			)}/>
		  	</div>
			</BrowserRouter>
    );
  }
}

export default App;